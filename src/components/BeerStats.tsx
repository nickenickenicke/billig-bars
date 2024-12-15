import { ppvUpperThresholds } from '@/lib/priceThresholds'

interface BeerStatsProps {
  beer_volume: number
  beer_ppv: number
}

export const BeerStats = ({ beer_ppv, beer_volume }: BeerStatsProps) => {
  return (
    <>
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
          <span className="">{beer_volume} cl</span>
        </div>
      </div>
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
          <span className="">{beer_ppv.toFixed(2)}</span>
          <span className="">kr/cl</span>
        </div>
      </div>
    </>
  )
}
