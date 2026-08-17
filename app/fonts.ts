import {
  DM_Mono,
  DM_Sans,
  Noto_Serif_Devanagari,
  Playfair_Display,
} from 'next/font/google'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const fontVariables = [
  dmSans.variable,
  dmMono.variable,
  playfair.variable,
  notoSerifDevanagari.variable,
].join(' ')
