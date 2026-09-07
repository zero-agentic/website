# zero-agentic.com

Zero Agentic LLC 官方门户站点。Astro 静态构建，部署到 GitHub Pages，绑定自定义域名。

视觉方向为 **LATENT FIELD**：首屏是一片由 WebGL 实时演算的潜空间色场，用公司标识的四色（橙 / 蓝 / 紫 / 粉）在噪声场里流动混合，每次加载都不重复。深浅两套主题对等，深色为默认。

- 设计系统与视觉约束：[DESIGN.md](DESIGN.md)
- 产品事实档案：[PRODUCT.md](PRODUCT.md)
- 建站决策与偏离记录：[implementation-notes.md](implementation-notes.md)

## 开发

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # astro check + 静态构建到 dist/
pnpm preview    # 本地预览构建产物
```

Node 24+，pnpm 10+。

## 站点结构

英文占根路径，中文在 `/zh` 前缀下，两套路由共用 `src/components/pages/` 里的同一批页面组件。

| 路由 | 中文 | 页面 |
| --- | --- | --- |
| `/` | `/zh/` | 首页 |
| `/products/` | `/zh/products/` | 产品（DesignDance 规格与计划范围） |
| `/about/` | `/zh/about/` | 关于、公司信息与联系方式 |
| `/privacy/` | `/zh/privacy/` | 隐私政策 |
| `/terms/` | `/zh/terms/` | 服务条款 |
| `/blog/` | `/zh/blog/` | 笔记索引 |
| `/blog/[slug]/` | `/zh/blog/[slug]/` | 笔记正文 |
| `/404` | — | 未找到（noindex） |

## 视觉系统

改任何视觉之前先读 [DESIGN.md](DESIGN.md)，尤其这几条硬约束：

- **色彩校验对三种底色取最小值**（主背景、抬升面、页脚沉底），只测主背景会漏掉页脚。
- **标题层次靠字体的宽度轴做**（`.title-soft`），不靠再引入一个颜色。
- **`LatentField` 是方向的承重件**，不是装饰，不可降级成静态图。压暗层是场的一部分（`variant` 同时决定能量与 veil 形状），调用方不要另铺一层。
- **禁止在标题上方加小标签**（kicker/eyebrow）和装饰编号。

`prototypes/` 里是定方向时的三个可运行原型，保留作为决策记录，不参与构建。

## 改内容

页面文案**不在组件里**，在两份结构化数据中：

- `src/content/site/en.ts`
- `src/content/site/zh.ts`

两份各自独立撰写，中文版不是英文版的翻译层。字段契约见 `src/content/site/types.ts`，组件内部用到的零散串（TBD 说明、脚注无障碍名称等）在各自的 `ui` 段。

公司名称、地址与联系邮箱集中在 `src/content/site/company-info.ts`，修改后全站生效。

**占位规则**：任何字段写 `null` 会渲染成品牌橙的 `TBD` 点线占位（带读屏可达的完整说明）。这是刻意的——未经确认的事实宁可显眼地空着，也不用套话填充。填入真实值即可替换。

**站内链接一律带尾斜杠**（`/products/` 而非 `/products`）。`build.format` 为 `directory`，GitHub Pages 只在带斜杠的路径上直接命中，漏写会吃一次 301。

### 加一篇笔记

在 `src/content/blog/en/` 或 `src/content/blog/zh/` 下新建 `.md`：

```yaml
---
title: '标题'
description: '一句话摘要'
pubDate: 2026-09-06
updatedDate: 2026-09-10  # 可选
draft: false             # true 则不出现在构建产物中
---
```

两种语言的文件名（slug）相同即可让语言切换停在同一篇文章上。

## 部署

推送到 `main` 触发 `.github/workflows/deploy.yml`，构建后发布到 GitHub Pages。

### 首次配置

1. **仓库设置** → Settings → Pages → Source 选 **GitHub Actions**。
2. **自定义域名** → Settings → Pages → Custom domain 填 `zero-agentic.com`，勾选 Enforce HTTPS（证书签发需要几分钟到几小时）。
3. **DNS**（在域名注册商处配置）：

   apex 域名 `zero-agentic.com` 指向 GitHub Pages 的四条 A 记录：

   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

   若同时要支持 `www`：

   ```
   CNAME    www    zero-agentic.github.io.
   ```

   IPv6 可另加 AAAA 记录，见 GitHub Pages 官方文档。

`public/CNAME` 已包含 `zero-agentic.com`，构建时会复制进产物 —— 不要删除它，否则每次部署都会重置自定义域名设置。

`astro.config.mjs` 中 `site` 已设为 `https://zero-agentic.com` 且**没有** `base`（自定义域名不需要）。改域名时同步改这两处。

## 上线前必须处理

见交付说明与 `implementation-notes.md` 的「待用户提供的真实事实」。简述：

1. **确认联系邮箱** —— 全站使用 `hello@zero-agentic.com`，定义在 `src/content/site/company-info.ts`。About 页联系区段以及隐私政策与服务条款的数据请求条款都指向它。若该邮箱不存在，隐私政策向访客做出的法定数据请求承诺会指向一个收不到信的地址。
2. **法务页须经执业律师审阅** —— `/privacy/` 与 `/terms/` 是对照真实数据流写的工程稿（隐私 17 条、条款 16 条），页面上有醒目的待审声明。涉及人脸照片的品类会触及伊利诺伊 BIPA、得州 CUBI；生成式图像/视频还涉及 EU AI Act 第 50 条的标注与披露义务。
3. **替换所有 TBD** —— 成立年份、注册辖区、团队规模、可用性、定价、法务生效日期。
4. **可选：补 `og:image`** —— 目前未设置，分享链接时卡片为空白。无技术故障，但需要真实视觉素材。
