import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GlamCS',
  description: 'Luxury cosmetics with modern design, offering high-quality products for the discerning beauty enthusiast.',
  keywords: ['cosmetics', 'GlamCS', 'luxury', 'modern', 'beauty', 'makeup'],
  authors: [{ name: 'GlamCS' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-white text-orange-600 min-h-screen antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-orange-200 via-white to-orange-200">
          {children}
        </div>
      </body>
    </html>
  )
}