import './../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Orbitron, Exo_2 } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-orbitron",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-exo2",
})

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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${orbitron.variable} ${exo2.variable}`}>
      <link rel='icon' href='/favicon.ico'/>
      <body>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
