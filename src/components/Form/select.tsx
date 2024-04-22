'use client'

import Image from 'next/image'

import { getConutries } from '@/services/countries'
import { useQuery } from '@tanstack/react-query'
import { SelectItem } from '../ui/select'

export default function CustomSelect() {
  const { data } = useQuery({
    queryKey: ['countries'],
    queryFn: getConutries,
  })

  const dataFilter = data?.filter((item) => 'currencies' in item)

  return (
    <>
      {dataFilter?.map((item, index) => (
        <div key={index}>
          <SelectItem
            key={index}
            value={`${Object.keys(item.currencies)[0]} - ${item.name.common}`}
          >
            <div className="flex w-full tracking-wider">
              <div className="mr-3 size-7">
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
