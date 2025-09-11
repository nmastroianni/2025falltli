import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '2025 Fall Teaching and Learning Institute Survey Results',
  description:
    'This is the feedback we received from our 2025 Fall Teaching and Learning Institute.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 lg:p-6 shadow-sm shadow-neutral-700 mb-4 lg:mb-8 sticky top-0 z-50 backdrop-blur-lg bg-neutral-950/80 flex justify-center">
          <Link href="/" className="absolute left-4 top-6 lg:left-8 lg:top-8">
            <HomeIcon className="size-4 lg:size-6" />
            <span className="sr-only">Go Home</span>
          </Link>
          <Link href="/">
            <h1 className="text-xs w-64 lg:text-3xl lg:w-full text-center">
              2025 Fall Teaching & Learning Institute Survey Results
            </h1>
          </Link>
        </header>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
