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
      className={`flex w-full items-center p-4 text-xl uppercase tracking-wide ${className ? className : ''}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
