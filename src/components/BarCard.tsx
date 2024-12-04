import { Bar } from '@/models/Bar'
import { normalizeMeters } from '@/utils/locationTools'
import { getPricePerCl } from '@/utils/priceTools'

interface BarCardProps {
  bar: Bar
}

export const BarCard = ({ bar }: BarCardProps) => {
  return (
    <>
      <section className="flex justify-between rounded-sm bg-slate-300">
        <div className="flex flex-1 flex-col">
          <div>
            <h3 className="text-xl">{bar.name}</h3>
            {bar.dist_meters && <span className="block">{normalizeMeters(bar.dist_meters)}</span>}
            <address className="block">{bar.address}</address>
            <span>Öppet till 01</span>
          </div>
          <div className="flex flex-row-reverse gap-2 pr-2">
            <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-yellow-500">
              <div className="flex flex-col items-center justify-center text-white">
                <span className="">{bar.beer_volume}</span>
                <span className="text-sm">CL</span>
              </div>
            </div>
            <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-yellow-500">
              <div className="flex flex-col items-center justify-center text-white">
                <span className="">{getPricePerCl(bar.beer_price, bar.beer_volume)}</span>
                <span className="text-sm">kr/cl</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <aside>
            <span>BILLIGAST</span>
          </aside>
          <div className="bg-green-price flex aspect-square w-[100px] items-center justify-center rounded-full">
            <div className="flex flex-col items-center justify-center text-white">
              <span className="text-5xl">{bar.beer_price}</span>
              <span className="text-sm leading-3">KR</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
