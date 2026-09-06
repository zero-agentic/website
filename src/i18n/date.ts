import type { Locale } from '../content/site/types'
import { LOCALE_TAGS } from './routing'

/** 按语言习惯排日期。列表用 short 省宽，正文用 long 便于阅读 */
export function formatDate(date: Date, locale: Locale, month: 'short' | 'long' = 'short'): string {
  return new Intl.DateTimeFormat(LOCALE_TAGS[locale], {
    year: 'numeric',
    month,
    day: 'numeric',
  }).format(date)
}
