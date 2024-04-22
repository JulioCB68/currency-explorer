'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form as FormContainer,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '../ui/input'
import CustomSelect from './select'

const FormSchema = z.object({
  from: z.string(),
  to: z.string(),
})

export function Form() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <FormContainer {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full space-y-2 ">
            <FormField
              control={form.control}
              name="from"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel>From</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a currecy" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <CustomSelect />
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full space-y-2 ">
            <FormField
              control={form.control}
              name="to"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel>To</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a currecy" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <CustomSelect />
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <label className="text-sm font-medium" htmlFor="amount">
            Amount
          </label>
          <div className="flex flex-col md:flex-row md:items-center">
            <Input
              id="amount"
              type="text"
              className="flex-1"
              placeholder="Enter amount"
            />
            <Button type="submit" className="mt-4 md:ml-2 md:mt-0">
              Convert
            </Button>
          </div>
        </div>
      </form>

      <div className="mt-10 text-center">
        <p className="text-lg font-bold">
          <span id="converted-amount">100</span>
          <span id="to-currency-symbol">EUR</span>
        </p>
      </div>
    </FormContainer>
  )
}
