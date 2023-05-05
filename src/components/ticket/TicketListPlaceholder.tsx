import { TicketsContainer } from '@/components'

export const TicketListPlaceholder = () => {
  const placeholderElements = [0, 1, 2, 3]

  return (
    <TicketsContainer>
      {placeholderElements.map((index) => (
        <li
          key={index}
          className='w-full animate-pulse min-h-invoice rounded-lg bg-dark-gray last:hidden md:min-h-invoice-md md:last:block'
        />
      ))}
    </TicketsContainer>
  )
}
