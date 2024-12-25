import Link from 'next/link'
import { SvgFooter } from './svgs/SvgFooter'
import { ScrollToTop } from './ScrollToTop'
import { SvgLogo } from './svgs/SvgLogo'

export const Footer = () => {
  return (
    <footer className="mt-8 flex w-full flex-col items-center md:mt-28">
      <SvgFooter className="-mb-1 max-h-24 max-w-[100vw]" />
      <div className="grid min-h-40 w-full grid-cols-[auto] grid-rows-[auto_auto_auto_1fr] gap-10 bg-black px-4 pb-20 pt-6 text-white md:grid-cols-[15rem_auto_1fr] md:grid-rows-[auto_1fr] md:gap-6">
        <figure className="row-span-1 md:col-[1/2] md:row-[1/2]">
          <SvgLogo className="h-6 fill-white" />
        </figure>
        <nav className="row-span-1 flex flex-col gap-3 text-xl tracking-wide md:col-[1/2] md:row-[2/3]">
          <Link href="/" className="">
            Hem
          </Link>
          <Link href="/bars" className="">
            Hitta barer
          </Link>
          <Link href="/about" className="">
            Om Billig Bärs
          </Link>
        </nav>
        <section className="row-span-1 block max-w-[25ch] underline-offset-4">
          <p>
            Jag som har gjort Billig Bärs heter Nicke Bergman och sidan är mitt examensarbete i
            utbildningen Frontend Developer på{' '}
            <a
              href="https://www.medieinstitutet.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Medieinstitutet
            </a>
            .
          </p>
          <p>
            Jag behöver ett jobb så kolla in min{' '}
            <a
              href="https://www.nickenickenicke.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              portfolio
            </a>{' '}
            eller stalka mig på{' '}
            <a
              href="https://github.com/nickenickenicke/"
              target="_blacnk"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>{' '}
            &{' '}
            <a
              href="https://www.linkedin.com/in/nickebergman/"
              target="_blacnk"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
        <ScrollToTop className="row-span-1 cursor-pointer justify-self-end underline underline-offset-4 hover:text-green-price md:col-[2/4] md:row-[1/2]">
          Tillbaka till starten av sidan
        </ScrollToTop>
      </div>
    </footer>
  )
}
