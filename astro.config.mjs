// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// 自定义域名部署到 GitHub Pages：site 用最终域名，不设 base。
// 域名绑定靠 public/CNAME，DNS 侧需把 apex 指向 GitHub Pages 的 A 记录。
export default defineConfig({
  site: 'https://zero-agentic.com',
  // trailingSlash 必须与 build.format 一致，否则 GitHub Pages 每条站内链接都吃一次
  // 301，且 canonical 会指向一个立刻重定向的 URL。
  // 'directory' 产出 about/index.html，GitHub Pages 只在 /about/ 上直接命中它，
  // 所以链接与 canonical 一律带尾斜杠 —— 这是 Pages 最原生的组合，零重定向。
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      // 英文占根路径 /，中文在 /zh 下
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', zh: 'zh-CN' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
