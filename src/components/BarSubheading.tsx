interface BarSubheadingProps {
  className?: string
  children: React.ReactNode
}

export const BarSubheading = ({ className, children }: BarSubheadingProps) => {
  return (
    <h2
      className={`mt-4 bg-gradient-to-b from-black to-black bg-[length:100%_1px] bg-center bg-no-repeat text-center text-xl font-medium uppercase ${className ? className : ''}`}
    >
      <span className="bg-white px-2">{children}</span>
    </h2>
  )
}
