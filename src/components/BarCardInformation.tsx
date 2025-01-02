import { Bar } from '@/models/Bar'
import { normalizeMeters } from '@/utils/locationTools'
import { BarOpenOrClosedText } from './BarOpenOrClosedText'

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
        <BarOpenOrClosedText
          is_open={bar.is_open}
          opening_hours={bar.opening_hours}
          opens_at={bar.opens_at}
        />
      </span>
    </>
  )
}
