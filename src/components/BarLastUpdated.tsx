interface BarLastUpdatedProps {
  barName: string
}

export const BarLastUpdated = ({ barName }: BarLastUpdatedProps) => {
  return (
    <div>
      <p>{barName} kontrollerades senast: 2021-10-07 12:34</p>
    </div>
  )
}
