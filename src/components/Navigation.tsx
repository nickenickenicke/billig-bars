import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './svgs/Logo'

export const Navigation = () => {
  return (
    <nav className="fixed top-0 z-[10] flex h-[70px] w-full justify-between bg-white">
      <Link href={'/'} className="flex h-full items-center justify-center pl-4 text-4xl">
        <Logo className="h-8" />
      </Link>
      <button className="aspect-square border-none">
        <div className="block h-0.5 w-8 -translate-y-2 bg-black"></div>
        <div className="block h-0.5 w-8 bg-black"></div>
        <div className="block h-0.5 w-8 translate-y-2 bg-black"></div>
      </button>
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
