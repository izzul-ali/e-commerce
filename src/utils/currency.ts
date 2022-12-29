export const formatCurrency = (usd: number): string => {
  // currency value when it was 12/28/23
  const idr = 15677.55

  const usdToIdr = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(usd * idr)

  if (usdToIdr.match('NaN') || usd.toFixed() === '0') {
    return 'Rp 0,-'
  }

  return usdToIdr
}
