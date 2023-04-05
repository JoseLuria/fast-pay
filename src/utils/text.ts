export const capitalize = (str: string) => str[0].toUpperCase() + str.substring(1)

export const formatId = (str: string) => {
  const hash = str.split('-')
  return '#' + hash[0]
}

export const formatDate = (time: Date) => {
  const date = new Date(time)

  return date.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return formatter.format(price)
}
