import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CipherX',
  description: 'Input password and check its strength',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='app'>{children}</main>
      </body>
    </html>
  )
}
