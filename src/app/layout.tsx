import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/reducers/Providers'
import { Navigation } from '@/components/Navigation'
import { Protest_Riot, Rubik } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Billig Bärs',
  description: 'Billig Bärs är din guide till billig bria på Söder!',
  openGraph: {
    siteName: 'Billig Bärs',
    url: 'https://billigbärs.se/'
  }
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
  const cookieStore = cookies()
  const adminCookie = cookieStore.get('sb-jzbjemldpjpydinqzzna-auth-token.1')
  const showAdmin: boolean = adminCookie ? true : false

  return (
    <html lang="en" className={``}>
      <body className={`${rubik.variable} ${protestRiot.variable} bg-white font-sans antialiased`}>
        <header>
          <Navigation showAdmin={showAdmin} />
        </header>
        <main className="mt-navbar">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  )
}
