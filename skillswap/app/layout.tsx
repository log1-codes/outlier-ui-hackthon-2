import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillSwap',
  description: 'PlatForm to swap Skills , not to swap bills',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
