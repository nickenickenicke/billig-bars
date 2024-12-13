import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/reducers/Providers'
import { Navigation } from '@/components/Navigation'
import { Protest_Riot, Rubik } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Billig Bärs',
  description: 'Drink up!'
}

export const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  display: 'swap'
})

export const protestRiot = Protest_Riot({
  variable: '--font-protest-riot',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={``}>
      <body className={`${rubik.variable} ${protestRiot.variable} mb-16 font-sans antialiased`}>
        <header>
          <Navigation />
        </header>
        <main className="mt-[75px] overflow-x-hidden">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
