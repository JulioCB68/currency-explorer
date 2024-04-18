import { poppins } from '@/config/font'
import { metaData } from '@/config/meta-data'

import Header from '@/components/header'

import { ThemeProvider } from '@/providers/theme-provider'
import '@/styles/globals.css'

export const metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
