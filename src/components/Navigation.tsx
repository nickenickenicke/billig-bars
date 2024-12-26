'use client'

import Link from 'next/link'
import { SvgLogo } from './svgs/SvgLogo'
import { Hamburger } from './Hamburger'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from './NavLink'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
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
      className="group fixed top-0 z-[10] grid w-full grid-cols-[auto,_1fr] grid-rows-[var(--navbar-height),_0fr] justify-between bg-white transition-all data-[open=true]:grid-rows-[var(--navbar-height),_1fr]"
      data-open={isMenuOpen}
      ref={menuRef}
    >
      <div className="col-[1/2] row-[1/2] flex items-center justify-start pl-4">
        <Link href={'/'} className="">
          <SvgLogo className="h-8 -translate-y-0.5 fill-black" />
        </Link>
      </div>
      <div className="flex items-center justify-end md:hidden">
        <Hamburger isMenuOpen={isMenuOpen} handleClick={handleButtonClick} />
      </div>
      <div className="col-span-2 row-[2/3] overflow-hidden group-data-[open=true]:pb-2 group-data-[open=true]:shadow-sm md:col-[2/3] md:row-[1/2] md:overflow-auto md:group-data-[open=true]:pb-[unset] md:group-data-[open=true]:shadow-none">
        <ul className="flex h-full flex-col items-end justify-center gap-2 md:basis-0 md:flex-row md:justify-end">
          <li className="contents">
            <NavLink href={'/bars'} handleClick={handleLinkClick}>
              Hitta barer
            </NavLink>
          </li>
          <li className="contents">
            <NavLink href={'/about'} handleClick={handleLinkClick}>
              Om Billig Bärs
            </NavLink>
          </li>
          <li className="contents md:hidden">
            <NavLink href={'/'} handleClick={handleLinkClick}>
              Startsida
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
