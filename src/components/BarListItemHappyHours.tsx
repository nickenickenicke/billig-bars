import { HappyHours } from '@/models/Bar'
import { getPricePerCl } from '@/utils/priceTools'
import { getWeekdayName, parseTimeFromDB } from '@/utils/timeTools'

interface BarListItemHappyHoursProps {
  happyHours: HappyHours[]
}
export const BarListItemHappyHours = ({ happyHours }: BarListItemHappyHoursProps) => {
  return (
    <>
      <ul>
        {happyHours.map((happyHour, i) => {
          return (
            <li key={happyHour.id!}>
              {`${getWeekdayName(happyHour.day_of_week)}: ${parseTimeFromDB(happyHour.starts_at)} - ${parseTimeFromDB(happyHour.starts_at)}`}
              <br />
              {`Volym: ${happyHour.volume}cl, pris: ${happyHour.price}kr, pris per cl: ${getPricePerCl(happyHour.price, happyHour.volume || 40)}kr`}
            </li>
          )
        })}
      </ul>
    </>
  )
}
