import { Item } from '@prisma/client'

export const calculateTicketTotal = (items: Item[]) => {
  return items.reduce((prevTotal, { price, quantity }) => {
    const itemTotal = price * quantity
    return prevTotal + itemTotal
  }, 0)
}

export const calculateItemsTotal = (items: Item[]) => {
  return items.map(({ id, name, price, quantity }) => {
    const total = quantity * price
    return { id, name, price, quantity, total }
  })
}
