import { en } from './en'
import { zh } from './zh'
import type { ISiteContent, Locale } from './types'

const content: Record<Locale, ISiteContent> = { en, zh }

export function getSiteContent(locale: Locale): ISiteContent {
  return content[locale]
}

export type { ISiteContent, Locale }
