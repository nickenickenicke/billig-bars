interface BarCardPillProps {
  children?: React.ReactNode
}

export const BarCardPill = ({ children }: BarCardPillProps) => {
  return (
    <span className="border-green-price text-green-price rounded-lg border-2 p-1 px-3 uppercase">
      {children}
    </span>
  )
}
