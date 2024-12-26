interface SubheadingProps {
  className?: string
  children: React.ReactNode
}

export const Subheading = ({ className, children }: SubheadingProps) => {
  return (
    <h2
      className={`${className ? className : ''} mt-8 bg-gradient-to-b from-black to-black bg-[length:100%_1px] bg-center bg-no-repeat text-center text-xl font-medium uppercase md:text-2xl`}
    >
      <span className="bg-white px-2">{children}</span>
    </h2>
  )
}
