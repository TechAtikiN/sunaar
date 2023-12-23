// type imports
import type { Metadata } from 'next'

// named imports
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

// style imports
import './globals.css'

// default imports
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sunaar',
  description: 'Pathway to Prosperity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <ReactQueryProvider>
        <body className={inter.className}>
          <main>
            {children}
          </main>
          <Toaster />
        </body>

      </ReactQueryProvider>
    </html>
  )
}
