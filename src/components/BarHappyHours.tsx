import { HappyHours } from '@/models/Bar'
import { getWeekdayName, normalizeTimeFromDB } from '@/utils/timeTools'

interface BarHappyHoursProps {
  happyHours: HappyHours[]
}

type GroupedHappyHours = {
  price: number
  volume: number
  ppv: number
  starts_at: number
  starts_at_min: number
  ends_at: number
  ends_at_min: number
  days: number[]
}

export const BarHappyHours = ({ happyHours }: BarHappyHoursProps) => {
  if (!happyHours.length) return null

  const groupHappyHours = (happyHoursToGroup: HappyHours[]) => {
    const happyHoursGroups: Record<string, GroupedHappyHours> = {}

    happyHoursToGroup.forEach(happyHour => {
      const key = `${happyHour.price}-${happyHour.volume}-${happyHour.ppv}-${happyHour.starts_at}-${happyHour.starts_at_min}-${happyHour.ends_at}-${happyHour.ends_at_min}`
      if (!happyHoursGroups[key]) {
        happyHoursGroups[key] = {
          price: happyHour.price,
          volume: happyHour.volume,
          ppv: happyHour.ppv,
          starts_at: happyHour.starts_at,
          starts_at_min: happyHour.starts_at_min,
          ends_at: happyHour.ends_at,
          ends_at_min: happyHour.ends_at_min,
          days: []
        }
      }
      happyHoursGroups[key].days.push(happyHour.day_of_week)
    })

    return Object.values(happyHoursGroups)
  }

  const groupedHappyHours = groupHappyHours(happyHours)

  return (
    <>
      <ul>
        {groupedHappyHours.map((group, i) => {
          return (
            <li key={i}>
              <span className="block">{JSON.stringify(group.days)}</span>
              <span className="block">
                {group.starts_at}.{group.starts_at_min} - {group.ends_at}.{group.ends_at_min}
              </span>
              <span className="block">
                {group.price}kr , {group.volume}cl, {group.ppv}kr/cl
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
