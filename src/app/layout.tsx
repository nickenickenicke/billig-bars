import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Billig Bira',
  description: 'Drink up!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
