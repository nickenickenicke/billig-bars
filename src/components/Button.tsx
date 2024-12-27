import { SvgLocationMarker } from './svgs/SvgLocationMarker'

interface ButtonProps {
  type: 'button' | 'submit'
  disabled?: boolean
  className?: string
  onClick?: () => void
  children: React.ReactNode
  geolocate?: boolean
}

export const Button = ({
  type,
  children,
  disabled,
  className,
  onClick,
  geolocate
}: ButtonProps) => {
  return (
    <button
      className={`group rounded-full border-2 border-black bg-black px-10 py-3 font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black md:text-xl ${className ? className : ''} ${type === 'submit' ? 'w-full' : ''} ${geolocate ? 'flex items-center justify-center gap-3 md:gap-5' : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {geolocate ? (
        <>
          <SvgLocationMarker className="h-4 fill-white group-hover:fill-black md:h-5" />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}
