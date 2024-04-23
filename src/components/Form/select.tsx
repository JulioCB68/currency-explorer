'use client'

import Image from 'next/image'

import { getCountries } from '@/services/countries'
import { useQuery } from '@tanstack/react-query'

import { SelectItem } from '../ui/select'

export default function CustomSelect() {
  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  })

  const dataFilter = countries?.filter((item) => 'currencies' in item)

  return (
    <>
      {dataFilter?.map((item, i) => (
        <div key={i}>
          <SelectItem
            value={`${Object.keys(item.currencies)[0]} - ${item.name.common}`}
          >
            <div className="flex w-full items-center tracking-wider">
              <div className="mr-3 flex size-7 items-center ">
                <Image
                  width={25}
                  height={25}
                  src={item.flags.svg}
                  alt={item.flags.alt ?? ''}
                  className="h-auto w-auto"
                />
              </div>
              <p>{`${Object.keys(item.currencies)[0]} - ${item.name.common}`}</p>
            </div>
          </SelectItem>
        </div>
      ))}
    </>
  )
}
