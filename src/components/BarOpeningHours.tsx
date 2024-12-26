import { OpeningHours } from '@/models/Bar'
import { getWeekdayName, normalizeTimeFromDB } from '@/utils/timeTools'
import { Fragment } from 'react'
import { Subheading } from './Subheading'

interface BarOpeningHoursProps {
  openingHours: OpeningHours[]
}
export const BarOpeningHours = ({ openingHours }: BarOpeningHoursProps) => {
  return (
    <>
      <ul className="mb-8 grid grid-cols-[auto_1fr] gap-2 md:text-lg">
        <li className="col-span-2">
          <Subheading className="mb-2">Öppettider</Subheading>
        </li>
        {openingHours.map((openingHour, i) => {
          return (
            <Fragment key={openingHour.id!}>
              <li className="mr-4">{getWeekdayName(openingHour.day_of_week)}</li>
              <li>
                {`${normalizeTimeFromDB(openingHour.opens_at)} - ${normalizeTimeFromDB(openingHour.closes_at)}`}
              </li>
            </Fragment>
          )
        })}
      </ul>
    </>
  )
}
