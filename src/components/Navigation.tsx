import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="fixed top-0 z-[10] flex h-[70px] w-full justify-between bg-slate-600 px-4 text-white">
      <Link href={'/'} className="flex aspect-square h-full items-center justify-center text-4xl">
        🍻
      </Link>
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
    </nav>
  )
}
