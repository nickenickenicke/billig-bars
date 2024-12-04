import { HappyHours } from '@/models/Bar'
import { getPricePerCl } from '@/utils/priceTools'
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
              {`${getWeekdayName(happyHour.day_of_week)}: ${normalizeTimeFromDB(happyHour.starts_at)} - ${normalizeTimeFromDB(happyHour.starts_at)}`}
              <br />
              {`Volym: ${happyHour.volume}cl, pris: ${happyHour.price}kr, pris per cl: ${getPricePerCl(happyHour.price, happyHour.volume || 40)}kr`}
            </li>
          )
        })}
      </ul>
    </>
  )
}
