interface BarLastUpdatedProps {
  barName: string
  last_updated: string
}

export const BarLastUpdated = ({ barName, last_updated }: BarLastUpdatedProps) => {
  return (
    <div className="flex flex-col items-end justify-end text-sm italic">
      <span>{barName} kontrollerades senast</span>
      <span>{last_updated}</span>
    </div>
  )
}
