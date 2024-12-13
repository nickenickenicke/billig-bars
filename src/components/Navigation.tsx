import Link from 'next/link'
import { Logo } from './svgs/Logo'
import { Hamburger } from './Hamburger'

export const Navigation = () => {
  return (
    <nav className="fixed top-0 z-[10] flex h-[70px] w-full justify-between bg-white">
      <Link href={'/'} className="flex h-full items-center justify-center pl-4 text-4xl">
        <Logo className="h-8" />
      </Link>
      <Hamburger />
      {/* <ul className="flex h-full items-center justify-end gap-2">
        <li>
          <Link href={'/'} className="flex h-[70px] min-w-20 items-center px-4">
            Home
          </Link>
        </li>
        <li>
          <Link href={'/bars'} className="flex h-[70px] min-w-20 items-center px-4">
            Bars
          </Link>
        </li>
        <li>
          <Link href={'/testing-ground'} className="flex h-[70px] min-w-20 items-center px-4">
            Test
          </Link>
        </li>
      </ul> */}
    </nav>
  )
}
