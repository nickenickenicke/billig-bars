'use client'

import Link from 'next/link'
import { Logo } from './svgs/Logo'
import { Hamburger } from './Hamburger'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from './NavLink'

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
      className="group fixed top-0 z-[10] grid w-full grid-cols-2 grid-rows-[var(--navbar-height),_0fr] justify-between bg-white transition-all data-[open=true]:grid-rows-[var(--navbar-height),_1fr]"
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
      <div className="col-span-2 row-[2/3] overflow-hidden group-data-[open=true]:pb-2 group-data-[open=true]:shadow-sm">
        <ul className="flex h-full flex-col items-end justify-center gap-2">
          <li className="contents">
            <NavLink href={'/bars'} handleClick={handleClick}>
              Hitta barer
            </NavLink>
          </li>
          <li className="contents">
            <NavLink href={'/testing-ground'} handleClick={handleClick}>
              Test
            </NavLink>
          </li>
          <li className="contents">
            <NavLink href={'/testing-ground'} handleClick={handleClick}>
              Om Billig Bärs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
