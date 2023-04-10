import { Item } from '@prisma/client'

export const calculateTicketTotal = (items: Item[]) => {
  const { price: total } = items.reduce((prev, { price, quantity }) => ({
    ...prev,
    price: prev.price + price * quantity
  }))

  return total
}

export const calculateItemsTotal = (items: Item[]) => {
  return items.map(({ id, name, price, quantity }) => {
    const total = quantity * price

    return { id, name, price, quantity, total }
  })
}
