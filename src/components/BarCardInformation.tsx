import { Bar } from '@/models/Bar'
import { normalizeMeters } from '@/utils/locationTools'
import { getClosingHour, getOpeningHour } from '@/utils/timeTools'

interface BarCardInformationProps {
  bar: Bar
}

export const BarCardInformation = ({ bar }: BarCardInformationProps) => {
  return (
    <>
      <h3 className="text-2xl font-medium md:mb-1 md:text-3xl">{bar.name}</h3>
      {bar.dist_meters && bar.dist_meters != -1 ? (
        <span className="block">{normalizeMeters(bar.dist_meters)}</span>
      ) : null}
      <address className="block not-italic">{bar.address}</address>
      <span className="block">
        {bar.is_open
          ? 'Öppet till ' + getClosingHour(bar.opening_hours)
          : getOpeningHour(bar.opens_at)}
      </span>
    </>
  )
}
