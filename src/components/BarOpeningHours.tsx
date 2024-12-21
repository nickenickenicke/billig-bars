import { OpeningHours } from '@/models/Bar'
import { getWeekdayName, normalizeTimeFromDB } from '@/utils/timeTools'
import { Fragment } from 'react'
import { BarSubheading } from './BarSubheading'

interface BarOpeningHoursProps {
  openingHours: OpeningHours[]
}
export const BarOpeningHours = ({ openingHours }: BarOpeningHoursProps) => {
  return (
    <>
      <ul className="grid grid-cols-[auto_1fr] gap-2">
        <li className="col-span-2">
          {/* <h3 className="font-medium uppercase">Öppettider</h3> */}

          <BarSubheading>Öppettider</BarSubheading>
        </li>
        {openingHours.map((openingHour, i) => {
          return (
            <Fragment key={openingHour.id!}>
              <li className="mr-4">{getWeekdayName(openingHour.day_of_week)}</li>
              <li>
                {`${normalizeTimeFromDB(openingHour.opens_at, openingHour.opens_at_min)} - ${normalizeTimeFromDB(openingHour.closes_at, openingHour.closes_at_min)}`}
              </li>
            </Fragment>
          )
        })}
      </ul>
    </>
  )
}
