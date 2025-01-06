interface BarLastUpdatedProps {
  barName: string
  controlled_at: string
}

export const BarLastControl = ({ barName, controlled_at }: BarLastUpdatedProps) => {
  const lastControl = new Date(controlled_at).toLocaleDateString('sv-SE', {
    timeZone: 'Europe/Stockholm'
  })
  return (
    <div className="flex flex-col items-end justify-end text-sm italic">
      <span>{barName} kontrollerades senast</span>
      <span>{lastControl}</span>
    </div>
  )
}
