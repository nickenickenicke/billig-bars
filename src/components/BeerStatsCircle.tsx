import { ppvUpperThresholds } from '@/lib/priceThresholds'

interface BeerStatsCircleProps {
  beer_ppv: number
  beer_volume: number
  displayPpv?: boolean
  displayVolume?: boolean
}

export const BeerStatsCircle = ({
  beer_ppv,
  beer_volume,
  displayPpv,
  displayVolume
}: BeerStatsCircleProps) => {
  if (!displayPpv && !displayVolume) {
    return null
  }
  if (displayPpv && displayVolume) {
    return null
  }
  return (
    <div
      className={`flex aspect-square w-[50px] items-center justify-center rounded-full border ${
        beer_ppv < ppvUpperThresholds.cheap
          ? 'border-green-price'
          : beer_ppv < ppvUpperThresholds.average
            ? 'border-yellow-price'
            : 'border-red-price'
      }`}
    >
      <div className="flex flex-col items-center justify-center text-xs text-black">
        {displayVolume && <span className="">{beer_volume} cl</span>}
        {displayPpv && (
          <>
            <span className="">{beer_ppv.toFixed(2)}</span>
            <span className="">kr/cl</span>
          </>
        )}
      </div>
    </div>
  )
}
