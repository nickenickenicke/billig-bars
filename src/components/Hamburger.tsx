'use client'

import { useState } from 'react'

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      className="group aspect-square border-none"
      data-open={isOpen}
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      <div className="block h-0.5 w-8 -translate-y-2 bg-black transition group-data-[open=true]:translate-y-0.5"></div>
      <div className="block h-0.5 w-8 bg-black"></div>
      <div className="block h-0.5 w-8 translate-y-2 bg-black transition group-data-[open=true]:-translate-y-0.5"></div>
    </button>
  )
}
