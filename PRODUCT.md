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

公司主营人工智能图片与视频生成方向的 AI 服务（用户原话）。

**未确认，不得杜撰**：公司的差异化机制、技术路线主张、成立时间、团队规模、所在地、融资情况。这些必须由用户提供后才能出现在页面上。

## Operating Context

- 站点为英文主语言（`/`）+ 中文次语言（`/zh`）。LLC 主体与 `.com` 域名面向国际市场。
- 站点内容由公司自己维护，通过 git push 触发 GitHub Actions 构建部署。
- 博客/更新日志用于持续发布公司动态，首期可以只有框架与少量文章。

## Capabilities and Constraints

**首期页面范围**（用户选定）：
- 首页
- 产品（Products）
- 关于（About）
- 联系（Contact）
- 隐私政策（Privacy Policy）
- 服务条款（Terms of Service）
- 博客 / 更新日志（Blog）

**技术约束**：
- 纯静态，无服务端。联系表单需第三方服务或 `mailto:`。
- 双语路由需在建站之初就分好，后期回填成本高。

**产品线事实**：
- `DesignDance` —— AI 设计生成产品（Logo、多尺寸 Icon、电商海报、游戏素材、老照片修复、婚纱照/宝宝照等品类）。**状态：开发中，尚未上线**（用户确认）。官网不得给出可用性承诺或试用链接。
- **未确认**：`model-hub`（AI 模型能力与定价目录）、`sub2api`（AI API 网关）这两个同级仓库是否属于 Zero Agentic 的对外产品线。在用户确认前不得在官网上署名或宣称拥有。

## Brand Commitments

现有资产来自 `zero` 仓库（`@zero-agentic/shared`），属于 DesignDance 产品的设计系统，公司层面的品牌是否沿用**待确认**：

- 主色 `--primary: #4bb1d4`（青蓝）
- 产品 Logo：一组橙 `#F9861F` / 蓝 `#33ADEC` / 紫 `#AE87EF` / 粉 `#E692BA` 的渐变球体，路径 `zero/packages/design/src/icons/logo.svg`
- 字体栈：Inter / Source Serif 4 / JetBrains Mono
- `--radius: 0.375rem`，已有完整 light/dark token 双套

**未确认**：公司独立 Logo、公司层面的品牌色、Slogan。

## Evidence on Hand

**手上真实存在的**：产品能力清单（来源 `zero/docs/product-scope-requirements.md`，业务方原始需求）、DesignDance 的设计系统 token 与产品 Logo。

**明确不存在、后续工作不得编造的**：客户名单、案例研究、用户数量、生成量、性能基准、媒体报道、测评、融资信息、团队照片与姓名、办公地址、成立年份、定价。任何一项要上页面，必须先由用户提供。

联系邮箱、社交账号、GitHub 组织公开程度均**待用户提供**。

## Product Principles

1. **门户不是落地页。** 页面服务于"理解与建立联系"，不服务于转化漏斗。没有紧迫感话术、没有促销、没有注册诱导。
2. **未上线就是未上线。** DesignDance 以"在建"的真实状态呈现，不做即将上线的倒计时表演，不放假的试用按钮。
3. **不拿产品作品当门面。** 用户明确否决了作品画廊路线；公司的说服力来自它做什么和怎么做，不来自图片墙。
4. **空白宁可留着。** 缺失的事实以占位标记交付并列入替换清单，绝不用行业套话填满。
5. **双语等重。** 中文版不是英文版的附属翻译层，路由、SEO、字体渲染都按一等公民对待。

## Accessibility & Inclusion

无用户提出的特定标准。按 WCAG 2.2 AA 作为默认底线执行：对比度、键盘可达、焦点可见、`prefers-reduced-motion` 尊重。
