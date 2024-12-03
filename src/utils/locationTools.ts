export const normalizePostalCode = (postalCode: number) => {
  return postalCode.toString().replace(/(.{3})/, '$1 ')
}
