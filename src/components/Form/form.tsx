'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { getCurrencyValue } from '@/services/currency'
import { extractCurrencyCode } from '@/utils/extract-currency-code'
import { formatCurrency } from '@/utils/format-currency'
import { useQuery } from '@tanstack/react-query'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select'
import CustomSelect from './select'

const formSchema = z.object({
  from: z.string(),
  to: z.string(),
  amount: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const { data: currency, refetch } = useQuery({
    queryKey: ['convert-currency'],
    queryFn: () => {
      const from = extractCurrencyCode(getValues('from'))
      const to = extractCurrencyCode(getValues('to'))
      return getCurrencyValue(from, to)
    },
    enabled: false,
  })

  function onSubmit() {
    refetch()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full space-y-2 ">
            <Controller
              name="from"
              control={control}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <Select
                    name={name}
                    value={value}
                    onValueChange={onChange}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a currecy" />
                    </SelectTrigger>
                    <SelectContent>
                      <CustomSelect />
                    </SelectContent>
                  </Select>
                )
              }}
            />
          </div>

          <div className="w-full space-y-2 ">
            <Controller
              name="to"
              control={control}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <Select
                    name={name}
                    value={value}
                    onValueChange={onChange}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a currecy" />
                    </SelectTrigger>
                    <SelectContent>
                      <CustomSelect />
                    </SelectContent>
                  </Select>
                )
              }}
            />
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <p className="w-full text-left text-sm font-medium">Amount</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <Input
              id="amount"
              type="text"
              className="flex-1"
              placeholder="Enter amount"
              {...register('amount')}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              className="mt-4 md:ml-2 md:mt-0"
            >
              Convert
            </Button>
          </div>
        </div>
      </form>

      <div className="mt-10">
        <p className="text-lg font-bold">
          <span className="mr-2" id="converted-amount">
            {currency &&
              formatCurrency(
                Object.values(currency)[0] * Number(getValues('amount')),
                Object.keys(currency)[0],
              )}
          </span>
          <span id="to-currency-symbol">{getValues('to')}</span>
        </p>
      </div>
    </div>
  )
}
