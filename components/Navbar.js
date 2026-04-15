'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    if (pathname !== '/') return

    const sections = ['how-it-works', 'categories', 'pricing']
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [pathname])

  const isHome = pathname === '/'
  const isAssessment = pathname === '/assessment'

  function navClass(href, sectionId) {
    const active =
      (href === '/assessment' && isAssessment) ||
      (sectionId && activeSection === sectionId)
    return active ? 'nav-link nav-link-active' : 'nav-link'
  }

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand">Match My Practice</Link>
        <nav className="nav-links">
          <Link href="/assessment" className={navClass('/assessment')}>Assessment</Link>
          <a href={isHome ? '#how-it-works' : '/#how-it-works'} className={navClass(null, 'how-it-works')}>How it works</a>
          <a href={isHome ? '#categories' : '/#categories'} className={navClass(null, 'categories')}>Solutions</a>
          <a href={isHome ? '#pricing' : '/#pricing'} className={navClass(null, 'pricing')}>Pricing</a>
        </nav>
        <Link href="/assessment" className="button button-sm button-primary">Get free snapshot</Link>
      </div>
    </header>
  )
}
