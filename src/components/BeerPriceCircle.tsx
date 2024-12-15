import { ppvUpperThresholds } from '@/lib/priceThresholds'

interface BeerPriceCircleProps {
  beer_ppv: number
  beer_price: number
}

export const BeerPriceCircle = ({ beer_ppv, beer_price }: BeerPriceCircleProps) => {
  return (
    <div
      className={`flex h-[100px] w-[100px] -rotate-[10deg] flex-col items-center justify-center place-self-end self-end rounded-full text-black ${
        beer_ppv < ppvUpperThresholds.cheap
          ? 'bg-green-price'
          : beer_ppv < ppvUpperThresholds.average
            ? 'bg-yellow-price'
            : 'bg-red-price'
      }`}
    >
      <span className="font-price text-5xl tracking-tighter">
        {beer_price}
        <span className="inline-block -translate-y-[0.33rem]">:</span>-
      </span>
    </div>
  )
}
