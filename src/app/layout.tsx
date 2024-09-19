import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/Header'
import { Inter_Tight } from 'next/font/google'

const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Legaplan Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

