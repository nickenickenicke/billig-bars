'use client'

interface ScrollToTopProps {
  children: React.ReactNode
  className?: string
}

export const ScrollToTop = ({ children, className }: ScrollToTopProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button
      className={`inline w-fit rounded-none border-none bg-transparent p-0 text-inherit ${className ? className : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
