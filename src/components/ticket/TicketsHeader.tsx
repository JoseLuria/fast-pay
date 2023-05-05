import type { TicketStatusList } from '@/types'
import { TicketSatus } from '@prisma/client'
import { type FC, Fragment, useState } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { Text } from '@/components'
import { ArrowDown, Plus } from '@/components/svg'

interface Props {
  size: number
  onFilter: (checkedStatus: TicketStatusList) => void
}

const statusTexts = {
  paid: 'Pagado',
  notPaid: 'Pendiente',
  paused: 'Pausado'
}

export const TicketsHeader: FC<Props> = ({ size, onFilter }) => {
  const [statusToFilterList, setStatusToFilterList] = useState<TicketStatusList>([])

  const updateStatusList = (newStatusList: TicketStatusList) => {
    setStatusToFilterList(newStatusList)
    onFilter(newStatusList)
  }

  const checkStatus = (statusToCheck: TicketSatus) => {
    const isStatusChecked = statusToFilterList.includes(statusToCheck)

    if (isStatusChecked) {
      const newStatusList = statusToFilterList.filter((status) => {
        return status !== statusToCheck
      })

      updateStatusList(newStatusList)
      return
    }

    updateStatusList([...statusToFilterList, statusToCheck])
  }

  return (
    <section className='w-full flex relative flex-wrap gap-8 items-center mb-8 md:mb-12'>
      <span>
        <Text tag='h1'>Tickets</Text>
        <Text>{size || 'Sin'} tickets</Text>
      </span>

      <Popover className='relative ml-auto'>
        <Popover.Button type='button' className='text-sm flex gap-1 font-semibold'>
          Filtros
          <ArrowDown width={18} height={18} />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Popover.Panel className='absolute shadow-md z-10 bg-white flex flex-col gap-1 top-10 rounded-xl right-0 text-black p-4'>
            {Object.values(TicketSatus).map((status) => (
              <fieldset className='flex justify-between gap-4 items-center' key={status}>
                <label htmlFor={status}>{statusTexts[status]}</label>
                <input
                  className='appearance-none rounded-sm bg-gray bg-opacity-50 w-4 h-4 checked:bg-green checked:bg-[url(/assets/mark-icon.webp)]'
                  onChange={() => checkStatus(status)}
                  type='checkbox'
                  name={status}
                  value={status}
                  checked={statusToFilterList.includes(status)}
                />
              </fieldset>
            ))}
          </Popover.Panel>
        </Transition>
      </Popover>

      <Link
        href='/app/ticket/edit?id=new'
        className='h-12 py-1 flex gap-2 pl-2 pr-4 items-center font-semibold text-sm duration-200 rounded-3xl bg-dark-gray hover:bg-low-gray focus-visible:bg-low-gray'
      >
        <span className='w-8 h-8 bg-black flex justify-center items-center rounded-full'>
          <Plus width={28} height={28} />
        </span>
        Nuevo
      </Link>
    </section>
  )
}
