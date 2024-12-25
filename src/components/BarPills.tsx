import { BarPill } from './BarPill'

interface BarPillsProps {
  is_open: boolean
  is_happy_hour: boolean
}

export const BarPills = ({ is_open, is_happy_hour }: BarPillsProps) => {
  if (is_open && !is_happy_hour) {
    return null
  }

  return (
    <>
      {!is_open && <BarPill red>Stängt</BarPill>}
      {is_happy_hour && <BarPill>Happy hour</BarPill>}
    </>
  )
}
