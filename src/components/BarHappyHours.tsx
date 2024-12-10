import { HappyHours } from '@/models/Bar'
import { getWeekdayName, normalizeTimeFromDB } from '@/utils/timeTools'

interface BarHappyHoursProps {
  happyHours?: HappyHours[]
}
export const BarHappyHours = ({ happyHours }: BarHappyHoursProps) => {
  if (!happyHours || happyHours.length === 0) return null

  return (
    <>
      <ul>
        {happyHours.map((happyHour, i) => {
          return (
            <li key={happyHour.id!}>
              {`${getWeekdayName(happyHour.day_of_week)}: ${normalizeTimeFromDB(happyHour.starts_at, happyHour.starts_at_min)} - ${normalizeTimeFromDB(happyHour.ends_at, happyHour.ends_at_min)}`}
              <br />
              {`Volym: ${happyHour.volume}cl, pris: ${happyHour.price}kr, pris per cl: ${happyHour.ppv}kr`}
            </li>
          )
        })}
      </ul>
    </>
  )
}
