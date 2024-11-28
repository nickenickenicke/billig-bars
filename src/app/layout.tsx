import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './reducers/Providers'

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
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
