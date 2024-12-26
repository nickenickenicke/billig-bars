import Link from 'next/link'

interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const ButtonLink = ({ href, children, className }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`rounded-full border-2 border-black bg-black px-10 py-3 font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black ${className ? className : ''}`}
    >
      {children}
    </Link>
  )
}
