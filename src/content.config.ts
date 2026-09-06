import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// 博客按语言分目录：src/content/blog/en/*.md、src/content/blog/zh/*.md
// 条目 id 形如 "en/first-post"，语言前缀即路由前缀。
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }
