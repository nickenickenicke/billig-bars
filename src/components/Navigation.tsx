'use client'

import Link from 'next/link'
import { Logo } from './svgs/Logo'
import { Hamburger } from './Hamburger'
import { useState } from 'react'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    //GRID WITH POPDOWN MENU
    <nav
      className="fixed top-0 z-[10] grid w-full grid-cols-2 grid-rows-[70px,_0fr] justify-between bg-red-300 transition-all data-[open=true]:grid-rows-[70px,_1fr]"
      data-open={isMenuOpen}
    >
      <div className="flex items-center justify-start pl-4">
        <Link href={'/'} className="">
          <Logo className="h-8 -translate-y-0.5" />
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <Hamburger isMenuOpen={isMenuOpen} handleClick={handleClick} />
      </div>
      <div className="col-span-2 row-[2/3] overflow-hidden bg-slate-400">
        <ul className="flex h-full items-center justify-end gap-2">
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
        </ul>
      </div>
    </nav>
  )
}
