import type { Metadata } from 'next'
// import React from 'react'
import { Roboto } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import GlobalNavigationBar from '@/components/common/global-navigation-bar'

// 전역 CSS
import '@/styles/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Malrang Home',
  description: 'Malrang Home page'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={roboto.className}>
        <div className="flex min-h-screen w-full flex-col">
          <GlobalNavigationBar />
          <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  )
}
