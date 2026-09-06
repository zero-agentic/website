import { getCollection, type CollectionEntry } from 'astro:content'
import type { Locale } from './site/types'

export type BlogPost = CollectionEntry<'blog'>

/** 条目 id 形如 "en/the-job"：语言前缀即路由前缀，其后是 slug */
function postLocale(post: BlogPost): Locale {
  return post.id.startsWith('zh/') ? 'zh' : 'en'
}

export function postSlug(post: BlogPost): string {
  return post.id.slice(post.id.indexOf('/') + 1)
}

/** 某语言下已发布的文章，新的在前 */
export async function getPosts(locale: Locale): Promise<BlogPost[]> {
  const posts = await getCollection('blog', (p) => !p.data.draft && postLocale(p) === locale)
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

/**
 * 文章详情页的静态路径。
 * 只有另一语言也有同名文章时才登记 hreflang，否则会把 404 当成备选版本。
 */
export async function getPostPaths(locale: Locale) {
  const live = await getCollection('blog', (p) => !p.data.draft)
  const mirrored = new Set(live.filter((p) => postLocale(p) !== locale).map(postSlug))

  return live
    .filter((p) => postLocale(p) === locale)
    .map((post) => ({
      params: { slug: postSlug(post) },
      props: { post, hasAlternate: mirrored.has(postSlug(post)) },
    }))
}
