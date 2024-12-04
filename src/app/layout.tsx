import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/reducers/Providers'
import { Navigation } from '@/components/Navigation'

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
      <body className={`mb-16 antialiased`}>
        <header>
          <Navigation />
        </header>
        <main className="mt-[90px] overflow-x-hidden px-2">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
