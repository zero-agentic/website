/** 站点内容的结构契约。英文与中文各提供一份实现，由同一套组件渲染。 */

export type Locale = 'en' | 'zh'

/** 参数表的一行。value 为 null 时渲染为 TBD 占位（校对红虚线），等待真实事实填入。 */
export interface ISpecRow {
  label: string
  value: string | null
  /** 脚注编号，渲染为上标引出线 */
  ref?: number
  /** 值本身是链接时的目标 */
  href?: string
  /** 渲染为状态戳而非普通值 */
  stamp?: boolean
}

export interface IFootnote {
  n: number
  text: string
}

/** 一条能力：能力名 + 一句说明 + 若干可核对的规格 */
export interface ICapability {
  name: string
  summary: string
  specs: ISpecRow[]
}

/** 产品线条目。状态走 specs 里 stamp 那一行，不在这里另开字段 */
export interface IProductEntry {
  name: string
  tagline: string
  description: string
  specs: ISpecRow[]
  /** 计划覆盖的品类，产品未上线时以「planned scope」呈现 */
  scope: { name: string; detail: string }[]
}

export interface INavItem {
  label: string
  href: string
}

export interface ISiteContent {
  locale: Locale
  /** 组件内部用到的零散 UI 串。放这里是为了不让英文硬编码漏进中文页 */
  ui: {
    /** TBD 占位的解释，走 abbr title 与读屏可达的说明 */
    tbdExplain: string
    /** 脚注引出编号的无障碍名称 */
    footnote: string
    /** 计数单位，如「7 items」/「7 项」 */
    items: string
    /** 明暗切换按钮的无障碍名称 */
    themeToggle: string
  }
  meta: {
    siteName: string
    defaultDescription: string
  }
  nav: {
    items: INavItem[]
    contactLabel: string
    langLabel: string
    skipToContent: string
  }
  home: {
    title: string
    description: string
    /** 首屏大标题的前半句，实体字重 */
    heroLead: string
    /** 后半句，窄体轻字重 —— 靠宽度轴拉开层次，不换颜色 */
    heroTrail: string
    generalDescription: string
    /** 首屏底沿的能力索引：三条能力的名字与一句极短的入口说明，兼作向下滚动的引导 */
    heroIndex: { name: string; note: string }[]
    /** 首屏状态标记 */
    statusLabel: string
    contactCta: string
    sections: {
      capabilities: {
        n: string
        title: string
        intro: string
        items: ICapability[]
      }
      products: {
        n: string
        title: string
        intro: string
        entry: IProductEntry
        readMore: string
      }
      contact: {
        n: string
        title: string
        intro: string
        cta: string
      }
    }
  }
  products: {
    title: string
    description: string
    n: string
    heading: string
    intro: string
    entry: IProductEntry
    scopeLabel: string
    scopeNote: string
    specLabel: string
    footnotes: IFootnote[]
  }
  about: {
    title: string
    description: string
    n: string
    heading: string
    statement: string[]
    principlesLabel: string
    principles: { title: string; body: string }[]
    factsLabel: string
    facts: ISpecRow[]
    footnotes: IFootnote[]
  }
  contact: {
    title: string
    description: string
    n: string
    heading: string
    intro: string
    email: string
    channelsLabel: string
    channels: { label: string; detail: string; email: string }[]
    footnotes: IFootnote[]
  }
  blog: {
    title: string
    description: string
    n: string
    heading: string
    intro: string
    empty: string
    backLabel: string
    publishedLabel: string
    updatedLabel: string
  }
  legal: {
    privacy: ILegalDoc
    terms: ILegalDoc
  }
  footer: {
    rights: string
    columns: { label: string; items: INavItem[] }[]
  }
}

export interface ILegalDoc {
  /** 文档在全站章节体系中的编号，联系页的交叉引用指向它 */
  n: string
  title: string
  description: string
  heading: string
  effectiveLabel: string
  effective: string
  intro: string
  clauses: { n: string; title: string; body: string[] }[]
}
