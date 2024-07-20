import type { Metadata } from 'next'
// import React from 'react'
import { Roboto } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

// 전역 CSS
import '@/styles/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Malrang Home',
  description: 'Malrang Home page'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={roboto.className}>
        {/* <SideNavigation /> */}
        {children}
        <Toaster />
      </body>
    </html>
  )
}
