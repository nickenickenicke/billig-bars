export const getPricePerCl = (price: number, volume: number) => {
  return Math.round((price / volume) * 1000) / 1000
}
