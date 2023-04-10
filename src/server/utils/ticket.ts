import { Item } from '@prisma/client'

export const calculateTicketTotal = (items: Item[]) => {
  const { price: total } = items.reduce((prev, { price, quantity }) => ({
    ...prev,
    price: prev.price + price * quantity
  }))

  return total
}
