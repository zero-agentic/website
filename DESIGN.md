# Design system — Zero Agentic

<!-- impeccable:design-doc -->

记录自已建成的站点，而非建站前的意图。改动视觉时以本文为准。

> 本文替换了此前的 SPEC SHEET（半导体数据手册）系统。那一版被业务方否决，理由是过冷、无色、无图像、不像创意公司。它现在是反参照，不是可回退的备选。

## 世界

**LATENT FIELD** —— 一家做生成式模型的公司，首屏的视觉不应该是一张放上去的图片，而应该是当场算出来的。

物质来源是公司标识本身：`zero/packages/design/src/icons/logo.svg` 里的四颗渐变球（橙 / 蓝 / 紫 / 粉），画在 `#05050C` 的深底上。整站的色彩、光、动，都是那四颗球在潜空间里流动的结果。

**明确拒绝的**：此前那份数据手册；以及本类目的另一个默认解 —— 扁平卡片网格配一张 stock 插画。

## 色彩

| Token | 深色 | 浅色 | 用途 |
| --- | --- | --- | --- |
| `--bg` | `#05050c` | `#f7f5f1` | 页面底 |
| `--bg-lift` | `#0b0b16` | `#ffffff` | 抬升面（代码块、勘误框） |
| `--bg-sink` | `#030308` | `#efece6` | 页脚沉底 |
| `--fg` | `#f4f2ee` | `#0d0d14` | 正文与标题 |
| `--fg-2` | `#b9b6ae` | `#4d4a44` | 次要文字 |
| `--fg-3` | `#8a877f` | `#68645c` | 弱化文字、标签 |
| `--brand-1` | `#f9861f` | 同 | 橙。装饰 |
| `--brand-2` | `#33adec` | 同 | 蓝。装饰 |
| `--brand-3` | `#ae87ef` | 同 | 紫。装饰 |
| `--brand-4` | `#e692ba` | 同 | 粉。装饰 |
| `--brand-N-ink` | 同装饰色 | `#a85200` `#0a6e9e` `#6d3fc4` `#a83a70` | 承载文字的品牌色 |

**硬约束**：装饰色（`--brand-N`）与文字色（`--brand-N-ink`）在深色下同值、在浅色下分离。浅底上直接用原色会掉到 2–3:1。

**校验口径**：每个前景色都要对**三种底色**（`--bg`、`--bg-lift`、`--bg-sink`）验证，取最小值 ≥ 4.5:1。只验证主背景会漏掉页脚 —— 浅色的 `--fg-3` 就是这样卡在 4.49:1 被 Lighthouse 抓到的。当前最小值：深色 5.45:1，浅色 4.60:1。

## 明暗

两个模式**对等**，不是深色为主浅色凑数。

- 深色是默认：标识本来就画在 `#05050C` 上。
- 首帧之前由 `BaseLayout` 里的 `is:inline` 同步脚本定好主题，避免深色用户看到一闪的浅色。首帧不参与过渡（`[data-theme-boot]`）。
- 用户选择存 `localStorage['za-theme']`。未选过则走深色，不跟随系统 —— 深色是品牌本色而非偏好项。
- 切换后派发 `themechange` 事件，WebGL 场据此换底色。

## 字体

| 角色 | 字体 | 说明 |
| --- | --- | --- |
| 标题 | `Bricolage Grotesque Variable` | 自托管。**带宽度轴（wdth）与光学尺寸轴（opsz）** |
| 正文 | `Manrope Variable` | 自托管 |
| 中文 | PingFang SC → 冬青黑 → 微软雅黑 → Noto Sans SC | 系统回落 |

**中文单独降一档。** 汉字字面率高于拉丁字母，同样 px 下视觉更重：`html:lang(zh)` 下 `.title-xl/lg/md` 各降一档，且字距归零 —— `-0.035em` 是为拉丁字母调的，套在汉字上会挤成一团。

**层次靠宽度轴，不靠颜色。** `.title-soft` 是 `wght 200` + `wdth 80`，用来做标题的次要分句 —— 不要为此再引入一个颜色。

`html:lang(zh)` 下 `.label` 的字距降到 `0.05em`（英文用的 `0.09em` 会把 CJK 拉散）。

## 组件语汇

| 组件 | 角色 |
| --- | --- |
| `LatentField` | 核心。WebGL 实时噪声场，四品牌色流动混合 |
| `SiteNav` | 页头。`fixed` 脱离文档流，默认**零背景**；滚动后落下实底；sm 以下收进汉堡菜单 |
| `ThemeToggle` | 明暗切换。两枚图标常驻 DOM，靠 `data-theme` 决定可见性 |
| `SpecList` | 规格列表。`dl > div > (dt,dd)` —— div 包裹是为了让分隔线连续 |
| `SectionHeading` | 区段标题。只保留标题本身，不附加装饰编号 |
| `Footnotes` | 脚注区 |
| `Wordmark` | 四颗渐变球标识 |
| `Arrow` | 绘制的方向箭头 |

CSS 语汇在 `global.css` 的 `@layer components`：`.shell`、`.title-xl/lg/md`、`.title-soft`、`.label`、`.chip`、`.tbd`、`.btn`、`.row`、`.bead`、`.prose`。

## LatentField 的实现契约

这是方向的技术核心，不是装饰，**不可降级成一张静态图**。

- Fragment shader：Ashima simplex noise 3D + 域扭曲（domain warping），四色按噪声权重混合。
- **先推高饱和再决定沉多深**：`mix(vec3(lum), col, 1.28)` 在前，`mix(void, col, energy)` 在后。顺序反了会混出灰。
- `energy` 把大部分画面沉回底色，只留几条流带发亮 —— 这是文字可读性的保障，不是美学选择。
- 每次加载随机相位，场永不重复。
- 降级链：WebGL 不可用 → CSS 多层径向渐变回退层（同色系，不是空白）。
- `prefers-reduced-motion` → 渲染一帧后停住，画面仍在。
- `IntersectionObserver` 离开视口即停算。
- DPR 上限 1.6。

压暗层是场的一部分，不由调用方另铺。`LatentField` 的 `variant`（`hero` / `page` / `band`）同时决定能量衰减和 veil 的形状 —— 文字落在场的哪一带，压暗就从哪里开始。**文字永远不与流带争对比度。**

内页 veil 顶端固定为 `68%` 底色混合。这个数不是随手定的：页头是完全透明的，导航文字压在场上，唯一的压暗来源就是 veil 顶端。按四个品牌色逐一算过，68% 时最坏情况（深色模式次要文字压在粉色流带上）为 5.88:1；降到 55% 会掉到 4.01:1，不过 AA。

## 禁止事项

- **不用卡片做页面结构。** 条目是被规则线分隔的行（`.row`），或自带边线的网格格子。
- **不在标题上方加 kicker / eyebrow。** 标题独立承担层级。这是绝对禁令。
- **不用渐变文字、玻璃拟态、backdrop-blur 装饰。**
- **不用 emoji 或 Unicode 字形代替图标。** 图标是绘制的 SVG。
- **不用 `.bead` 而不给 `display`。** 它是 span，inline 状态下宽高无效。
- **路径一律带尾斜杠。** `build.format` 为 `directory`，无斜杠的内链会在 GitHub Pages 上吃一次 301。
- **页头不能有自己的背景。** 它必须 `fixed` 脱离文档流 —— 用 `sticky` 会让它在文档流里占一行，场只能从它下面开始，那一行 body 底色就是一块看得见的独立色块。压暗归 veil，不归页头。
- **页头的实底伪元素要让位。** `::after` 在 DOM 顺序上排在内容之后，同层叠上下文里会盖住 `nav`，内容必须显式 `z-index: 1`。
- **`set:html` 必须挂在真实元素上。** `<set:html value={…} />` 会被解析成未知元素并终止 head 解析。

## 动作

一处编排过的入场：`.surface`（内容从场里浮出），`0.85s`，`cubic-bezier(0.16, 1, 0.3, 1)`，位移 + 显影 + 去模糊。

`.chip` 的呼吸点是唯一的常驻动效。`prefers-reduced-motion` 下全部停用。

## 浏览器表面

选中色（`--brand-3`）、光标色、滚动条、焦点环（`2px solid var(--brand-2-ink)`，offset 3px）、`::marker` 全部纳入设计系统。

## 已验证

- WCAG：全部前景色对三种底色逐一校验，两模式最小值 5.45:1 / 4.60:1
- Lighthouse（桌面 navigation）：**深色与浅色各跑一次**，均为 Accessibility 100 / Best Practices 100 / SEO 100 / Agentic Browsing 100，52 项通过 0 失败
- impeccable detector：零发现
- `astro check`：0 errors / 0 warnings / 0 hints
- 标题层级：每个生成页面各恰好一个 `h1`
- 内部链接：全站零失效，尾斜杠一致
- 中文页英文串残留：零
- 移动端 390px：无横向溢出，导航收进汉堡菜单
