import { Poppins, Montserrat } from 'next/font/google'

export const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-poppins',
})

export const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-montserrat',
})
