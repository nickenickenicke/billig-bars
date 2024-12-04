import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/reducers/Providers'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

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
      <body className={`mb-16 px-2 antialiased`}>
        <header>
          <Navigation />
        </header>
        <main className="mt-[90px] overflow-x-hidden">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
