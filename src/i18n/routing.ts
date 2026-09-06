import type { Locale } from '../content/site/types'

/** HTML lang 属性与 hreflang 使用的完整语言标记 */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
}

/**
 * 把一条与语言无关的路径映射到目标语言。
 * 英文占根路径，中文加 /zh 前缀。
 *
 * 一律带尾斜杠：build.format 为 'directory'，GitHub Pages 只在 /about/ 上直接
 * 命中 about/index.html，无斜杠的写法会吃一次 301。
 */
export function localizePath(path: string, locale: Locale): string {
  const bare = path.replace(/^\/+|\/+$/g, '')
  const clean = bare === '' ? '' : `/${bare}`
  const prefixed = locale === 'zh' ? `/zh${clean}` : clean
  return prefixed === '' ? '/' : `${prefixed}/`
}

/** 归一化为带尾斜杠的形式，用于当前页判定 */
export function normalizePath(path: string): string {
  const bare = path.replace(/^\/+|\/+$/g, '')
  return bare === '' ? '/' : `/${bare}/`
}

/** 去掉语言前缀，得到与语言无关的路径，用于语言切换与 hreflang */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/zh(?=\/|$)/, '')
  return stripped === '' ? '/' : stripped.replace(/\/$/, '') || '/'
}

/** 语言切换目标：停留在当前页面的另一语言版本 */
export function alternatePath(pathname: string, locale: Locale): string {
  const bare = stripLocale(pathname)
  return localizePath(bare, locale === 'en' ? 'zh' : 'en')
}
