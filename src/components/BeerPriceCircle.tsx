import { ppvUpperThresholds } from '@/lib/priceThresholds'

interface BeerPriceCircleProps {
  beer_ppv: number
  beer_price: number
  mapPopup?: boolean
}

export const BeerPriceCircle = ({ beer_ppv, beer_price, mapPopup }: BeerPriceCircleProps) => {
  return (
    <div
      className={`flex h-[100px] w-[100px] -rotate-[10deg] flex-col items-center justify-center place-self-end self-end rounded-full text-black ${
        beer_ppv < ppvUpperThresholds.cheap
          ? 'bg-green-price'
          : beer_ppv < ppvUpperThresholds.average
            ? 'bg-yellow-price'
            : 'bg-red-price'
      } ${mapPopup ? 'h-[50px] w-[50px]' : 'h-[100px] w-[100px]'} `}
    >
      <span className={`font-price tracking-tighter ${mapPopup ? 'text-2xl' : 'text-5xl'}`}>
        {beer_price}
        <span
          className={`inline-block ${mapPopup ? '-translate-y-[0.18rem]' : '-translate-y-[0.33rem]'}`}
        >
          :
        </span>
        -
      </span>
    </div>
  )
}
