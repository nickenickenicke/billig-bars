interface BarPillProps {
  children?: React.ReactNode
  red?: boolean
}

export const BarPill = ({ children, red }: BarPillProps) => {
  return (
    <span
      className={`rounded-full border p-1 px-2.5 text-xs uppercase tracking-wide ${red ? 'border-red-price text-red-price' : 'border-green-price text-green-price'}`}
    >
      {children}
    </span>
  )
}
