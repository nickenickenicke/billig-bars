export const calculatePPV = (price: string, volume: string): number => {
  const priceInt = parseInt(price)
  const volumeInt = parseInt(volume)
  const parsedPrice = parseFloat((priceInt / volumeInt).toFixed(3))

  return +parsedPrice
}
