import './globals.css'

export const metadata = {
  title: 'Match My Practice',
  description: 'Find the right AI solution for your dental practice.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
