import CustomSelect from '@/components/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col items-center justify-center gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="container mb-20 flex items-center justify-center">
        <div className="w-full max-w-screen-sm rounded-lg  bg-background/30 px-6 py-8 shadow-md">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold">Currency Converter</h1>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full space-y-2">
              <label className="text-sm font-medium" htmlFor="from">
                From
              </label>
              <CustomSelect />
            </div>
            <div className="w-full space-y-2 ">
              <label className="text-sm font-medium" htmlFor="to">
                To
              </label>
              <CustomSelect />
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
              <Button className="mt-4 md:ml-2 md:mt-0" type="button">
                Convert
              </Button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-bold">
              <span id="converted-amount">100</span>
              <span id="to-currency-symbol">EUR</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
