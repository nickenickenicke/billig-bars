interface BarLastUpdatedProps {
  barName: string
  last_controlled: string
}

export const BarLastControl = ({ barName, last_controlled }: BarLastUpdatedProps) => {
  return (
    <div className="flex flex-col items-end justify-end text-sm italic">
      <span>{barName} kontrollerades senast</span>
      <span>{last_controlled}</span>
    </div>
  )
}
