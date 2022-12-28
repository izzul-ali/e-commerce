export const formatCurrency = (usd: number): string => {
  // currency value when it was 12/28/23
  const idr = 15677.55

  if (Number.isNaN(usd)) {
    return 'Rp 0'
  }

  const usdToIdr = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(usd * idr)

  return usdToIdr
}
