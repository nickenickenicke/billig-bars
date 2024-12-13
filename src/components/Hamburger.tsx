'use client'

import { useState } from 'react'

interface HamburgerProps {
  isMenuOpen: boolean
  handleClick: () => void
}

export const Hamburger = ({ isMenuOpen, handleClick }: HamburgerProps) => {
  return (
    <button
      className="group aspect-square border-none"
      data-is-menu-open={isMenuOpen}
      onClick={handleClick}
    >
      <div className="block h-0.5 w-8 -translate-y-2 bg-black transition group-data-[is-menu-open=true]:translate-y-0.5"></div>
      <div className="block h-0.5 w-8 bg-black"></div>
      <div className="block h-0.5 w-8 translate-y-2 bg-black transition group-data-[is-menu-open=true]:-translate-y-0.5"></div>
    </button>
  )
}
