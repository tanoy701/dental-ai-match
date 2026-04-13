import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand">Match My Practice</Link>
        <nav className="nav-links">
          <Link href="/assessment">Assessment</Link>
          <a href="#how-it-works">How it works</a>
          <a href="#categories">Solutions</a>
        </nav>
        <Link href="/assessment" className="button button-sm">Start</Link>
      </div>
    </header>
  )
}
