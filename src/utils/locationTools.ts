export const normalizePostalCode = (postalCode: number) => {
  return postalCode.toString().replace(/(.{3})/, '$1 ')
}

export const normalizeMeters = (meters: number): string => {
  if (meters < 1000) {
    return `${meters.toFixed(0)} meter`
  }

  let km = (meters / 1000).toFixed(2).toString()
  if (km.endsWith('00')) {
    km = km.slice(0, -3)
  }

  return `${km} km`
}
