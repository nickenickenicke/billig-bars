import { HappyHours } from '@/models/Bar'
import { getWeekdayName, normalizeTimeFromDB } from '@/utils/timeTools'
import { BeerPriceCircle } from './BeerPriceCircle'
import { BeerStatsCircle } from './BeerStatsCircle'

interface BarHappyHoursProps {
  happyHours: HappyHours[]
}

type GroupedHappyHours = {
  price: number
  volume: number
  ppv: number
  starts_at: string
  ends_at: string
  days: number[]
}

export const BarHappyHours = ({ happyHours }: BarHappyHoursProps) => {
  if (!happyHours.length) return null

  const groupHappyHours = (happyHoursToGroup: HappyHours[]): GroupedHappyHours[] => {
    const happyHoursGroups: Record<string, GroupedHappyHours> = {}

    happyHoursToGroup.forEach(happyHour => {
      const key = `${happyHour.price}-${happyHour.volume}-${happyHour.ppv}-${happyHour.starts_at}-${happyHour.ends_at}`
      if (!happyHoursGroups[key]) {
        happyHoursGroups[key] = {
          price: happyHour.price,
          volume: happyHour.volume,
          ppv: happyHour.ppv,
          starts_at: happyHour.starts_at,
          ends_at: happyHour.ends_at,
          days: []
        }
      }
      happyHoursGroups[key].days.push(happyHour.day_of_week)
    })

    return Object.values(happyHoursGroups)
  }

  const getDayRange = (days: number[]): string => {
    const sortedDays = [...days].sort((a, b) => a - b)

    const isConsecutive = sortedDays.every(
      (day, index) => index === 0 || day === sortedDays[index - 1] + 1
    )

    if (isConsecutive) {
      const startDay = getWeekdayName(sortedDays[0])
      const endDay = getWeekdayName(sortedDays[sortedDays.length - 1])
      return startDay === endDay ? startDay : `${startDay} - ${endDay}`
    }

    return sortedDays.map(day => getWeekdayName(day)).join(', ')
  }

  const groupedHappyHours = groupHappyHours(happyHours)

  return (
    <>
      <h3 className="mb-2 mt-8 font-medium uppercase md:text-xl">Happy hour-priser</h3>
      <ul className="grid grid-cols-[auto_1fr] gap-y-1">
        {groupedHappyHours.map((group, i) => {
          return (
            <li
              key={i}
              className="col-span-2 row-span-2 mb-4 grid grid-cols-subgrid grid-rows-subgrid md:text-lg"
            >
              <span className="col-span-1 mr-3 block">{getDayRange(group.days)}</span>
              <span className="col-span-1 block">
                {normalizeTimeFromDB(group.starts_at)} - {normalizeTimeFromDB(group.ends_at)}
              </span>
              <ul className="col-span-2 flex basis-0 items-end justify-start gap-2">
                <li>
                  <BeerPriceCircle beer_ppv={group.ppv} beer_price={group.price} small />
                </li>
                <li>
                  <BeerStatsCircle beer_ppv={group.ppv} beer_volume={group.volume} displayVolume />
                </li>
                <li>
                  <BeerStatsCircle beer_ppv={group.ppv} beer_volume={group.volume} displayPpv />
                </li>
              </ul>
            </li>
          )
        })}
      </ul>
    </>
  )
}
