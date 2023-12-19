import type { Metadata } from 'next'
import { Inter, Work_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description: 'NFT Marketplace Web Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  )
}
