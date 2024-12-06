interface BarCardPillProps {
  children?: React.ReactNode
}

export const BarCardPill = ({ children }: BarCardPillProps) => {
  return (
    <span className="rounded-lg border-2 border-green-price p-1 px-3 uppercase text-green-price">
      {children}
    </span>
  )
}
