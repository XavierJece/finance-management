import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | QUEM FAZ',
    default: 'QUEM FAZ',
  },
  description: 'Entre quem faz o que você deseja!',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
