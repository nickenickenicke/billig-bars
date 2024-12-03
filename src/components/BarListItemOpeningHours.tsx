import { OpeningHours } from '@/models/Bar'
import { getWeekdayName, parseTimeFromDB } from '@/utils/timeTools'

interface BarListItemOpeningHoursProps {
  openingHours: OpeningHours[]
}
export const BarListItemOpeningHours = ({ openingHours }: BarListItemOpeningHoursProps) => {
  return (
    <>
      <ul>
        {openingHours.map((openingHour, i) => {
          return (
            <li key={openingHour.id!}>
              {`${getWeekdayName(openingHour.day_of_week)}: ${parseTimeFromDB(openingHour.opens_at)} - ${parseTimeFromDB(openingHour.closes_at)}`}
            </li>
          )
        })}
      </ul>
    </>
  )
}
