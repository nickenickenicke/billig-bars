'use client'

import Link from 'next/link'
import { Logo } from './svgs/Logo'
import { Hamburger } from './Hamburger'
import { useEffect, useRef, useState } from 'react'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (!menuRef.current) return

    const handleClickOutsideMenu = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('mousedown', handleClickOutsideMenu)
    return () => {
      window.removeEventListener('mousedown', handleClickOutsideMenu)
    }
  }, [menuRef])

  return (
    <nav
      className="fixed top-0 z-[10] grid w-full grid-cols-2 grid-rows-[70px,_0fr] justify-between bg-white transition-all data-[open=true]:grid-rows-[70px,_1fr]"
      data-open={isMenuOpen}
      ref={menuRef}
    >
      <div className="flex items-center justify-start pl-4">
        <Link href={'/'} className="">
          <Logo className="h-8 -translate-y-0.5" />
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <Hamburger isMenuOpen={isMenuOpen} handleClick={handleClick} />
      </div>
      <div className="col-span-2 row-[2/3] overflow-hidden">
        <ul className="flex h-full flex-col items-end justify-center gap-2">
          <li className="contents">
            <Link
              href={'/'}
              className="flex h-[70px] w-full items-center px-4"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className="contents">
            <Link
              href={'/bars'}
              className="flex h-[70px] w-full items-center px-4"
              onClick={handleClick}
            >
              Bars
            </Link>
          </li>
          <li className="contents">
            <Link
              href={'/testing-ground'}
              className="flex h-[70px] w-full items-center px-4"
              onClick={handleClick}
            >
              Test
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
