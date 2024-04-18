import { poppins } from '@/config/font'
import { metaData } from '@/config/meta-data'

import { ThemeProvider } from '@/providers/theme-provider'

import Header from '@/components/header'

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
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
