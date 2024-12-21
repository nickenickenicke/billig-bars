interface BarCardPillProps {
  children?: React.ReactNode
}

export const BarCardPill = ({ children }: BarCardPillProps) => {
  return (
    <span className="rounded-full border border-green-price p-1 px-2.5 text-xs uppercase tracking-wide text-green-price">
      {children}
    </span>
  )
}
