# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS，静态构建，部署到 GitHub Pages（仓库 `zero-agentic/website`），绑定自定义域名 `zero-agentic.com`。用户在开工前的技术栈轮次中明确选定，非委托决策。

约束来自部署目标：GitHub Pages 只托管静态产物，没有服务端运行时。因此表单提交、鉴权、动态数据一律不可用，必须走第三方端点或 `mailto:`。

## Users

官网的访客是**来了解这家公司的人**，不是来使用产品的人。用户原话："这个项目是公司官方门户页面"、"不是我们的产品服务站点"。

由此推出的访客画像（**推断，未经用户逐条确认**）：潜在合作方、供应商与渠道、对公司感兴趣的候选人、媒体与调研者。他们的任务是在几分钟内判断这家公司是否真实、在做什么、值不值得建立联系，然后找到联系方式。

## Product Purpose

Zero Agentic LLC 的对外身份门户。它要回答三个问题：这家公司是谁、提供什么 AI 能力、如何联系。成功的定义是访客离开时能准确复述公司的业务范围，并且知道下一步该发邮件给谁。

它明确**不**承担的职责：产品试用入口、作品画廊、转化落地页、注册漏斗。

## Positioning

Zero Agentic LLC 开发并运营 AI 创作软件。公司为 2026 年 9 月在怀俄明州成立的有限责任公司，邮寄地址 30 N Gould St, Ste N, Sheridan, WY 82801, USA（注册代理地址，页面上标注为「邮寄地址」，不写成营业地址）。对外联系邮箱 `support@zerokit.ai`。

首款也是目前唯一的产品是 Zero Kit（https://zerokit.ai），2026 年 9 月已公开上线。

**未确认，不得杜撰**：团队规模、融资情况、用户数、收入、客户名单、办公地点。这些必须由用户提供后才能出现在页面上。

## Operating Context

- 站点为英文主语言（`/`）+ 中文次语言（`/zh`）。LLC 主体与 `.com` 域名面向国际市场。
- 站点内容由公司自己维护，通过 git push 触发 GitHub Actions 构建部署。
- 博客/更新日志用于持续发布公司动态，首期可以只有框架与少量文章。

## Capabilities and Constraints

**首期页面范围**（用户选定）：
- 首页
- 产品（Products）
- 关于（About）
- 关于与联系（About，联系方式合并在该页）
- 隐私政策（Privacy Policy）
- 服务条款（Terms of Service）
- 博客 / 更新日志（Blog）

**技术约束**：
- 纯静态，无服务端。联系表单需第三方服务或 `mailto:`。
- 双语路由需在建站之初就分好，后期回填成本高。

**产品线事实**（以 zerokit.ai 线上文案为准）：
- `Zero Kit` —— AI 图片生成、AI 视频生成与 AI 图片编辑合在一套工具里。**状态：已上线**，地址 https://zerokit.ai。
- 图片生成：500+ 风格预设；品类含 Logo、图标、海报、幻灯片配图、游戏素材、婚纱／情侣／宝宝人像、人像精修、老照片修复。
- 视频生成：文生视频与图生视频。
- 编辑工具 7 个，各占一个 `/tools/<slug>` 页面：智能扩图、消除物体、局部重绘、放大到 4K/8K、老照片修复、风格迁移、图片转视频。
- 模型通过获得授权的第三方 API 调用。Zero Kit 是独立产品，与任何模型厂商无关联。**官网不得出现具体模型厂商或模型名称。**
- 付费：包月／包年订阅 + 一次性积分包；另有每日赠送的免费积分。价格不写数字，只指向 https://zerokit.ai/pricing。
- 界面 19 种语言，面向个人创作者与小企业。
- 产品自己的法务文件在 https://zerokit.ai/terms、/privacy、/refund、/acceptable-use；公司站的法务页只覆盖 zero-agentic.com，产品部分一律引用过去。

## Brand Commitments

现有资产来自 `zero` 仓库（`@zero-agentic/shared`），属于 Zero Kit 产品的设计系统，公司层面的品牌是否沿用**待确认**：

- 主色 `--primary: #4bb1d4`（青蓝）
- 产品 Logo：一组橙 `#F9861F` / 蓝 `#33ADEC` / 紫 `#AE87EF` / 粉 `#E692BA` 的渐变球体，路径 `zero/packages/design/src/icons/logo.svg`
- 字体栈：Inter / Source Serif 4 / JetBrains Mono
- `--radius: 0.375rem`，已有完整 light/dark token 双套

**未确认**：公司独立 Logo、公司层面的品牌色、Slogan。

## Evidence on Hand

**手上真实存在的**：Zero Kit 线上产品本身（zerokit.ai 的公开文案即事实来源）、产品的设计系统 token 与 Logo、公司注册信息（名称、州、成立月份、邮寄地址）。

**明确不存在、后续工作不得编造的**：客户名单、案例研究、用户数量、生成量、性能基准、媒体报道、测评、融资信息、团队照片与姓名、办公地址、具体价格数字。任何一项要上页面，必须先由用户提供。

联系邮箱已确定为 `support@zerokit.ai`。社交账号、GitHub 组织公开程度仍**待用户提供**。

## Product Principles

1. **门户不是落地页。** 页面服务于"理解与建立联系"，不服务于转化漏斗。没有紧迫感话术、没有促销、没有注册诱导。
2. **只说线上已有的。** Zero Kit 的能力以 zerokit.ai 线上事实为准，不写尚未实现的规格，不写没有依据的承诺。
3. **不拿产品作品当门面。** 用户明确否决了作品画廊路线；公司的说服力来自它做什么和怎么做，不来自图片墙。
4. **空白宁可留着。** 缺失的事实以占位标记交付并列入替换清单，绝不用行业套话填满。
5. **双语等重。** 中文版不是英文版的附属翻译层，路由、SEO、字体渲染都按一等公民对待。

## Accessibility & Inclusion

无用户提出的特定标准。按 WCAG 2.2 AA 作为默认底线执行：对比度、键盘可达、焦点可见、`prefers-reduced-motion` 尊重。
