'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function send(event, data = {}) {
  const payload = {
    event,
    page: window.location.pathname,
    ts: Date.now(),
    ...data
  }
  // Use sendBeacon for reliability on page unload, fetch otherwise
  const body = JSON.stringify(payload)
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/track', new Blob([body], { type: 'application/json' }))
  } else {
    fetch('/api/track', { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {})
  }
}

export default function PageTracker() {
  const pathname = usePathname()
  const entryTime = useRef(Date.now())
  const maxScroll = useRef(0)
  const sectionsViewed = useRef(new Set())
  const formStarted = useRef(false)
  const formSubmitted = useRef(false)

  // Track page entry
  useEffect(() => {
    entryTime.current = Date.now()
    maxScroll.current = 0
    sectionsViewed.current = new Set()
    formStarted.current = false
    formSubmitted.current = false
    send('page_view', { page: pathname })
  }, [pathname])

  // Track scroll depth
  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      if (total <= 0) return
      const pct = Math.round((scrolled / total) * 100)
      if (pct > maxScroll.current) {
        maxScroll.current = pct
        // Fire milestones
        if (pct >= 25 && !sectionsViewed.current.has('scroll_25')) {
          sectionsViewed.current.add('scroll_25')
          send('scroll_depth', { depth: 25 })
        }
        if (pct >= 50 && !sectionsViewed.current.has('scroll_50')) {
          sectionsViewed.current.add('scroll_50')
          send('scroll_depth', { depth: 50 })
        }
        if (pct >= 75 && !sectionsViewed.current.has('scroll_75')) {
          sectionsViewed.current.add('scroll_75')
          send('scroll_depth', { depth: 75 })
        }
        if (pct >= 90 && !sectionsViewed.current.has('scroll_90')) {
          sectionsViewed.current.add('scroll_90')
          send('scroll_depth', { depth: 90 })
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // Track section visibility
  useEffect(() => {
    const sectionIds = ['how-it-works', 'categories', 'pricing']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !sectionsViewed.current.has(id)) {
            sectionsViewed.current.add(id)
            send('section_view', { section: id })
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [pathname])

  // Track nav link clicks
  useEffect(() => {
    function onClick(e) {
      const link = e.target.closest('a[href]')
      if (!link) return
      const href = link.getAttribute('href')
      if (href && href.startsWith('#')) {
        send('nav_click', { target: href })
      }
      if (href && href.includes('/assessment')) {
        send('cta_click', { target: 'assessment', source: link.textContent?.trim() })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [pathname])

  // Track form interactions on assessment page
  useEffect(() => {
    if (pathname !== '/assessment') return

    function onFormInput(e) {
      if (!formStarted.current) {
        formStarted.current = true
        send('form_start')
      }
    }

    function onFormSubmit(e) {
      formSubmitted.current = true
      send('form_submit')
    }

    const form = document.querySelector('.assessment-form')
    if (form) {
      form.addEventListener('input', onFormInput)
      form.addEventListener('submit', onFormSubmit)
      return () => {
        form.removeEventListener('input', onFormInput)
        form.removeEventListener('submit', onFormSubmit)
      }
    }
  }, [pathname])

  // Track upsell clicks on success page
  useEffect(() => {
    if (pathname !== '/success') return

    function onClick(e) {
      const btn = e.target.closest('a.button, button')
      if (!btn) return
      const label = btn.textContent?.trim()
      send('upsell_click', { label })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [pathname])

  // Track page exit with time-on-page + max scroll
  useEffect(() => {
    function onExit() {
      const timeMs = Date.now() - entryTime.current
      send('page_exit', {
        time_ms: timeMs,
        max_scroll_pct: maxScroll.current,
        form_started: formStarted.current,
        form_submitted: formSubmitted.current,
        sections_viewed: Array.from(sectionsViewed.current)
      })
    }
    window.addEventListener('beforeunload', onExit)
    return () => window.removeEventListener('beforeunload', onExit)
  }, [pathname])

  return null
}
