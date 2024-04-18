import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import ToggleTheme from './toggle-theme'

import { CircleDollarSign, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-background flex h-full items-center justify-between gap-4 border-b p-3 px-4 md:px-6">
      <div className="flex w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 pt-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Convert
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                History
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Trend Charts
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link
          href="#"
          className="flex w-full items-center justify-center gap-2 text-lg font-semibold md:justify-start"
        >
          <CircleDollarSign className="h-6 w-6" />
          <span className="">CurrencyXplorer</span>
        </Link>
      </div>
      <div className="flex flex-1 gap-6">
        <nav className="hidden flex-col gap-6 whitespace-nowrap text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Convert
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            History
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Trend Charts
          </Link>
        </nav>
        <ToggleTheme />
      </div>
    </header>
  )
}
