import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  handleClick: () => void
  className?: string
}

export const NavLink = ({ href, className, handleClick, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex w-full items-center px-4 py-3 text-xl uppercase tracking-wide ${className ? className : ''} md:h-full md:w-[unset] md:gap-8 md:px-8 md:hover:bg-bg-blue`}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
