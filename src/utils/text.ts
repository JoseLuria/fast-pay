export const capitalize = (str: string) => str[0].toUpperCase() + str.substring(1)

export const formatId = (str: string) => {
  const hash = str.split('-')
  return '#' + hash[0].toUpperCase()
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

export const getCurrentDate = (date?: string) => {
  return new Date(date ?? Date.now()).toISOString().split('T')[0]
}

export const calculateTicketEnd = (start: Date, duration: number) => {
  const date = new Date(start)
  date.setDate(date.getDate() + duration)
  return date
}
