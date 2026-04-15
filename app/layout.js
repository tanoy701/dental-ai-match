import './globals.css'
import PageTracker from '@/components/PageTracker'

export const metadata = {
  title: 'Match My Practice',
  description: 'Find out where your dental practice is losing revenue — and what to fix first.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTracker />
        {children}
      </body>
    </html>
  )
}
