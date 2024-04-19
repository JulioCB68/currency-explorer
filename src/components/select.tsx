'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getConutries } from '@/services/countries'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

export default function CustomSelect() {
  const { data } = useQuery({
    queryKey: ['countries'],
    queryFn: getConutries,
  })

  const dataFilter = data?.filter((item) => 'currencies' in item)

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {dataFilter?.map((item, index) => (
            <SelectItem
              key={index}
              value={`${Object.keys(item.currencies)[0]} - ${item.name.common}`}
            >
              <div className="flex w-full tracking-wider">
                <Image
                  width={25}
                  height={25}
                  src={item.flags.svg}
                  alt={item.flags.alt ?? ''}
                  className="mr-3"
                />
                <p>{`${Object.keys(item.currencies)[0]} - ${item.name.common}`}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
