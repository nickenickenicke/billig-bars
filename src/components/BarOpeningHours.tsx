import { OpeningHours } from '@/models/Bar'
import { getWeekdayName, normalizeTimeFromDB } from '@/utils/timeTools'

interface BarOpeningHoursProps {
  openingHours: OpeningHours[]
}
export const BarOpeningHours = ({ openingHours }: BarOpeningHoursProps) => {
  return (
    <>
      <ul>
        {openingHours.map((openingHour, i) => {
          return (
            <li key={openingHour.id!}>
              {`${getWeekdayName(openingHour.day_of_week)}: ${normalizeTimeFromDB(openingHour.opens_at)} - ${normalizeTimeFromDB(openingHour.closes_at)}`}
            </li>
          )
        })}
      </ul>
    </>
  )
}