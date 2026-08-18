import { DM_Mono, DM_Sans, Noto_Serif_Devanagari, Playfair_Display } from 'next/font/google'

export const dmMono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const dmSans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const notoSerifDevanagari = Noto_Serif_Devanagari({
  weight: ['400', '500', '600'],
  subsets: ['devanagari'],
  variable: '--font-display-devanagari',
  display: 'swap',
})

export const playfairDisplay = Playfair_Display({
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const fontVariables = [
  dmMono.variable,
  dmSans.variable,
  notoSerifDevanagari.variable,
  playfairDisplay.variable,
].join(' ')
