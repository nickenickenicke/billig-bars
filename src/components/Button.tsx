interface ButtonProps {
  type: 'button' | 'submit'
  disabled?: boolean
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

export const Button = ({ type, children, disabled, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`rounded-full border-2 border-black bg-black px-10 py-3 font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black ${className ? className : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
