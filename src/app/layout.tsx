import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/reducers/Providers'
import { Navigation } from '@/components/Navigation'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Billig Bira',
  description: 'Drink up!'
}

export const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk.woff2',
  variable: '--font-space-grotesk'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={``}>
      <body className={`${spaceGrotesk.variable} mb-16 font-sans antialiased`}>
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
