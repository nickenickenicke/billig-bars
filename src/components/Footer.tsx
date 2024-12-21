import Link from 'next/link'
import { SvgFooter } from './svgs/SvgFooter'
import { ScrollToTop } from './ScrollToTop'
import { SvgLogo } from './svgs/SvgLogo'

export const Footer = () => {
  return (
    <footer className="mt-8 flex w-full flex-col items-center">
      <SvgFooter className="-mb-1 max-h-24 max-w-[100vw]" />
      <div className="grid min-h-40 w-full grid-cols-[1fr_auto] grid-rows-[auto_auto_auto_1fr] gap-2 bg-black px-4 py-6 text-white">
        <figure className="col-span-2 row-span-1">
          <SvgLogo className="h-6 fill-white" />
        </figure>
        <ul className="col-span-2">
          <li>
            <Link href="/">Hem</Link>
          </li>
          <li>
            <Link href="/bars">Hitta barer</Link>
          </li>
          <li>
            <Link href="/about">Om Billig Bärs</Link>
          </li>
        </ul>
        <p className="col-span-2 mb-20 block max-w-[25ch]">
          Bla bla lite info kanske som till exempel att Nicke har gjort den här och han är så bra!
        </p>
        <ScrollToTop className="col-span-2 row-span-1 justify-self-end">
          Tillbaka till starten av sidan
        </ScrollToTop>
      </div>
    </footer>
  )
}
