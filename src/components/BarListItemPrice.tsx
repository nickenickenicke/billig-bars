import { HappyHourPriceDetails, HappyHours } from '@/models/Bar'
import { getHappyHourPrice, getPricePerCl } from '@/utils/priceTools'

interface BarListItemPriceProps {
  isHappyHour: boolean
  beer_price: number
  beer_volume: number
  happyHours: HappyHours[]
}

export const BarListItemPrice = ({
  isHappyHour,
  happyHours,
  beer_price,
  beer_volume
}: BarListItemPriceProps) => {
  if (isHappyHour) {
    const happyHourPriceDetails: HappyHourPriceDetails = getHappyHourPrice(happyHours)
    return (
      <>
        <p>
          <span className="line-through">{beer_price}</span> {happyHourPriceDetails.price} kr
        </p>
        <p>{happyHourPriceDetails.volume} cl</p>
        <p>kr/cl: {getPricePerCl(happyHourPriceDetails.price, happyHourPriceDetails.volume)}kr</p>
      </>
    )
  }
  return (
    <>
      <p>{beer_price} kr</p>
      <p>{beer_volume} cl</p>
      <p>kr/cl: {getPricePerCl(beer_price, beer_volume)}kr</p>
    </>
  )
}
