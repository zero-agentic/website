import type { ISiteContent } from './types'
import { COMPANY_ADDRESS_TEXT, COMPANY_NAME, CONTACT_EMAIL } from './company-info'

/**
 * 中文站内容。
 *
 * 不是英文版的翻译层：同样的事实，按中文的说话方式重写。
 * 硬规则与英文版一致——产品事实以 zerokit.ai 线上为准，不写模型厂商与模型名。
 */
export const zh: ISiteContent = {
  locale: 'zh',

  ui: {
    tbdExplain: '未定——等待业务方确认的事实',
    footnote: '脚注',
    items: '项',
    themeToggle: '切换明暗主题',
  },


  meta: {
    siteName: 'Zero Agentic',
    defaultDescription:
      'Zero Agentic LLC 开发并运营 AI 创作软件。首款产品是 Zero Kit——AI 图片生成、AI 视频生成与 AI 图片编辑合在一套工具里。',
  },

  nav: {
    items: [
      { label: '首页', href: '/zh/' },
      { label: '产品', href: '/zh/products/' },
      { label: '关于', href: '/zh/about/' },
      { label: '笔记', href: '/zh/blog/' },
    ],
    contactLabel: '联系',
    langLabel: 'English',
    skipToContent: '跳到正文',
  },

  home: {
    title: 'AI 创作软件公司 | Zero Agentic',
    description:
      'Zero Agentic LLC 开发并运营 AI 创作软件。首款产品 Zero Kit 可以生成图片和视频、编辑照片，已在 zerokit.ai 上线。',
    heroLead: 'Zero Agentic',
    heroTrail: 'AI 创作软件。',

    generalDescription:
      '我们为个人创作者和小企业开发并运营 AI 创作软件。首款产品 Zero Kit，说一句话或者丢一张照片进去，几秒钟拿到能用的成品。',

    heroIndex: [
      { name: '图片生成', note: '一句话，或者一张照片' },
      { name: '视频生成', note: '一段描述，或者一张起始图' },
      { name: '图片编辑工具', note: '七个工具，各管一件事' },
    ],

    statusLabel: '一款产品，已上线 zerokit.ai',
    contactCta: '联系我们',

    sections: {
      capabilities: {
        title: 'AI 图片生成、视频生成与图片编辑',
        intro: 'Zero Kit 能做的三件事。都在同一款产品里，不单独对外提供。',
        items: [
          {
            name: '图片生成',
            summary:
              '不用琢磨提示词。说一句话或者丢一张照片进去，选个风格，几秒钟拿到成品图。',
            specs: [
              { label: '输入', value: '一句话，或者一张照片' },
              { label: '风格', value: '500+ 预设' },
              { label: '品类', value: 'Logo、图标、海报、幻灯片配图' },
              { label: '还有', value: '游戏素材、人像、精修、老照片修复' },
            ],
          },
          {
            name: '视频生成',
            summary: '同样的思路做视频：描述一个镜头，或者给一张图让它动起来。',
            specs: [
              { label: '输入', value: '一段描述，或者一张起始图' },
              { label: '方式', value: '文生视频、图生视频' },
              { label: '运行环境', value: '浏览器' },
            ],
          },
          {
            name: '图片编辑工具',
            summary:
              '七个各管一件事的工具，处理照片已经存在之后的活儿——扩边、清理、放大，或者让它动起来。',
            specs: [
              { label: '工具数', value: '7' },
              { label: '修', value: '消除物体、局部重绘、老照片修复' },
              { label: '改尺寸', value: '智能扩图、放大到 4K / 8K' },
              { label: '变形态', value: '风格迁移、图片转视频' },
            ],
          },
        ],
      },

      products: {
        title: '产品',
        intro: '我们只有一款产品。它已经上线，我们做的每件事都落在它身上，现在就能打开用。',
        entry: {
          name: 'Zero Kit',
          tagline: 'AI 图片生成、AI 视频生成、AI 图片编辑，合在一套工具里。',
          description:
            '不用写提示词：说一句话或者丢一张照片，几秒钟拿回成品，500+ 种风格可选。给个人创作者和小企业用。',
          specs: [
            { label: '状态', value: '已上线', stamp: true },
            { label: '访问地址', value: 'zerokit.ai', href: 'https://zerokit.ai' },
            { label: '运行环境', value: '浏览器' },
          ],
          scope: [],
        },
        readMore: '看详细的',
      },
    },
  },

  products: {
    title: 'Zero Kit — AI 图片、视频与照片编辑 | Zero Agentic',
    description:
      'Zero Kit 是 Zero Agentic LLC 运营的 AI 图片生成、AI 视频生成与 AI 图片编辑工具，已在 zerokit.ai 上线，面向个人创作者和小企业。',
    heading: 'AI 创作软件',
    intro:
      'Zero Kit 是 Zero Agentic 开发并运营的产品，2026 年 9 月起在 zerokit.ai 公开可用。下面是它目前覆盖的范围。',
    entry: {
      name: 'Zero Kit',
      tagline: 'AI 图片生成、AI 视频生成、AI 图片编辑，合在一套工具里。',
      description:
        '大多数工具给你一个提示词输入框，然后指望你学会怎么跟它说话。Zero Kit 不这样。说一句话或者丢一张照片，从 500 多种风格里挑一个，几秒钟拿回成品——图片、视频，或者手上那张照片的编辑结果。',
      specs: [
        { label: '状态', value: '已上线', stamp: true },
        { label: '访问地址', value: 'zerokit.ai', href: 'https://zerokit.ai' },
        { label: '运行环境', value: '浏览器' },
        { label: '风格', value: '500+ 预设' },
        { label: '界面语言', value: '19 种' },
        { label: '编辑工具', value: '7 个', ref: 1 },
        { label: '付费方式', value: '订阅制与积分包', ref: 2 },
        { label: '定价', value: 'zerokit.ai/pricing', href: 'https://zerokit.ai/pricing' },
        { label: '免费档', value: '每日赠送积分' },
        { label: '模型来源', value: '授权的第三方 API', ref: 3 },
      ],
      scope: [
        {
          name: '图片生成',
          detail: '一句话或者一张照片进去，成品图出来，500 多种风格预设可选。',
        },
        {
          name: 'Logo 与图标',
          detail: '品牌、应用、网站要用的标识，从一句描述或者一张参考图生成。',
        },
        {
          name: '海报与幻灯片配图',
          detail: '海报版式，以及幻灯片、演示文稿里要用的插图。',
        },
        {
          name: '游戏素材',
          detail: '场景、道具、角色，风格你自己挑。',
        },
        {
          name: '婚纱照、情侣照与宝宝照',
          detail: '用手上已有的照片，做成成组的人像作品。',
        },
        {
          name: '人像精修',
          detail: '对上传的人像照片做精修。',
        },
        {
          name: '老照片修复',
          detail: '模糊的、破损的、年头久的照片，修回来。',
        },
        {
          name: '视频生成',
          detail: '描述一个镜头拿到视频，或者给一张图让它动起来。',
        },
        {
          name: '编辑工具',
          detail:
            '七个工具各管一件事：扩展画面、消除物体、局部重绘、放大到 4K 或 8K、修复老照片、迁移风格、把静图变成视频。',
        },
      ],
    },
    scopeLabel: '覆盖范围',
    scopeNote: 'Zero Kit 目前覆盖的范围。下面每一项在 zerokit.ai 上都可以直接用。',
    specLabel: '概要',
    footnotes: [
      {
        n: 1,
        text: '智能扩图、消除物体、局部重绘、图片放大、老照片修复、风格迁移、图片转视频。每个工具在 zerokit.ai/tools 下面各占一个页面。',
      },
      {
        n: 2,
        text: '包月或包年订阅，另有一次性购买的积分包。价格公布在 zerokit.ai/pricing。',
      },
      {
        n: 3,
        text: 'Zero Kit 是独立产品。背后的模型通过获得授权的第三方 API 调用，Zero Kit 与任何模型厂商均无关联，也未获得其背书。',
      },
    ],
  },

  about: {
    title: '关于 Zero Agentic | AI 创作软件公司',
    description:
      'Zero Agentic LLC 是 2026 年 9 月在美国怀俄明州成立的有限责任公司，开发并运营 AI 创作软件，首款产品是 Zero Kit。',
    heading: '关于 Zero Agentic',
    statement: [
      'Zero Agentic LLC 开发并运营 AI 创作软件。公司是 2026 年 9 月在美国怀俄明州成立的有限责任公司。',
      '首款产品是 Zero Kit——AI 图片生成、AI 视频生成与 AI 图片编辑合在一套工具里，2026 年 9 月起在 zerokit.ai 公开可用。它面向个人创作者和小企业，在浏览器里运行，界面支持 19 种语言，通过包月或包年订阅、一次性积分包付费，另有每日赠送的免费积分。',
      `公司、产品、账单、法务与隐私方面的问题，都可以发邮件到 ${CONTACT_EMAIL}。`,
    ],
    servicesLabel: '主要业务',
    services: [
      {
        title: '产品研发',
        body: '我们设计、开发并运营 Zero Kit。它是我们唯一的产品，做的每件事都落在它身上。',
      },
      {
        title: '模型接入',
        body: '把获得授权的第三方模型 API 接进产品，并对经过的内容做安全审核。',
      },
      {
        title: '客户支持',
        body: '通过邮件回应产品、账号与账单问题，法务和隐私请求也走同一个邮箱。',
      },
      {
        title: '内容安全与合规',
        body: '维护可接受使用政策，对提示词与上传内容按政策审核，并处理举报。',
      },
    ],
    factsLabel: '公司信息',
    facts: [
      { label: '法定名称', value: COMPANY_NAME },
      { label: '实体类型', value: '怀俄明州有限责任公司' },
      { label: '成立时间', value: '2026 年 9 月' },
      { label: '邮寄地址', value: COMPANY_ADDRESS_TEXT },
      { label: '产品', value: 'Zero Kit', href: 'https://zerokit.ai' },
      { label: '公司网站', value: 'zero-agentic.com', href: 'https://zero-agentic.com' },
    ],
    contact: {
      heading: '联系我们',
      body: '产品支持、商务合作、媒体、法务或隐私相关事项，请发送邮件至：',
      email: CONTACT_EMAIL,
    },
  },

  blog: {
    title: 'AI 图片与视频生成笔记 | Zero Agentic',
    description: 'Zero Agentic 关于 AI 图片生成、AI 视频生成，以及把生成结果做成能用的东西的产品与工程笔记。',
    heading: 'AI 生成笔记',
    intro: '关于我们在做什么、为什么这么做的记录。有值得写下来的东西才写，不按周期更新。',
    empty: '暂无记录。',
    backLabel: '全部笔记',
    publishedLabel: '发布',
    updatedLabel: '修订',
  },

  legal: {
    privacy: {
      title: '隐私政策 — Zero Agentic',
      description: 'Zero Agentic LLC 在 zero-agentic.com 上如何收集、使用与留存个人信息。',
      heading: '隐私政策',
      effectiveLabel: '生效日期',
      effective: '2026年9月19日',
      intro:
        '本政策说明 Zero Agentic LLC（下称“Zero Agentic”或“我们”）在本公司网站 zero-agentic.com 上如何处理个人信息。',
      clauses: [
        {
          n: '1',
          title: '适用范围',
          body: [
            '本政策只适用于公司网站 zero-agentic.com。',
            '我们的产品 Zero Kit 由它自己的隐私政策约束，见 https://zerokit.ai/privacy。账号、上传内容、生成产出与支付信息都归那份政策管，不归本政策。',
            '本网站是纯静态站点。没有账号体系，没有评论功能，也没有向我们提交数据的表单。访问本站不会在我们的系统上产生托管商日志之外的任何记录。',
          ],
        },
        {
          n: '2',
          title: '本网站收集的信息',
          body: [
            '本站不设置 Cookie，不运行任何分析或广告追踪脚本。',
            '本站由 GitHub Pages 托管。GitHub 会在分发站点的过程中处理请求日志（含 IP 地址）。该处理受 GitHub 自身的隐私声明约束，不在我们的控制范围内。',
            '字体为自托管。加载本站页面不会向任何第三方字体、分析或 CDN 服务发起请求。',
          ],
        },
        {
          n: '3',
          title: '您联系我们时收集的信息',
          body: [
            '若您发送邮件给我们，我们会收到您的邮箱地址、邮件内容及附件。这些往来通信会在事项处理所需期间内保留，并作为记录留存。',
            '我们不会把联系人加入营销名单。',
          ],
        },
        {
          n: '4',
          title: '产品数据',
          body: [
            '本网站不收集任何产品数据。Zero Kit 收集什么、保留多久、与谁共享，写在 Zero Kit 隐私政策里：https://zerokit.ai/privacy。',
          ],
        },
        {
          n: '5',
          title: '处理的法律依据',
          body: [
            '在 GDPR 或英国 GDPR 适用于本政策所述处理的情形下，我们依据：正当利益，用于处理往来通信与保障系统安全；同意，用于我们明确征求同意的场合；法律义务，用于法律要求我们留存或披露信息的情形。',
            '以同意为依据的处理，您可随时撤回同意，且不影响撤回前已进行的处理。',
          ],
        },
        {
          n: '6',
          title: '个人信息的出售与共享',
          body: [
            '我们不出售个人信息，也不为跨情境行为广告而共享个人信息——这两个概念依《加州消费者隐私法》（CCPA）的定义理解。',
            '我们从未这样做过。若该立场将来发生变化，我们会在其生效之前公布变更，并提供该法所要求的选择退出机制。',
            '我们不会在知情的情况下出售或共享未满 16 周岁个人的信息。',
          ],
        },
        {
          n: '7',
          title: '您的权利',
          body: [
            '视您所在地区而定，您可能有权访问、更正、导出或删除我们持有的个人信息，反对或限制其处理，以及撤回同意。加利福尼亚州居民，以及欧洲经济区与英国居民，在此方面享有特定的法定权利。',
            '行使上述任一权利请发邮件给我们。我们不收取费用，也不会因为您提出请求而区别对待您。',
            '若您位于欧洲经济区或英国，且对我们处理请求的方式不满意，您有权向所在国的数据保护监管机构提起投诉。',
          ],
        },
        {
          n: '8',
          title: '留存期限',
          body: [
            '往来通信在事项处理期间及其后的合理期间内保留。',
            '产品侧的留存期限写在 Zero Kit 隐私政策里。',
          ],
        },
        {
          n: '9',
          title: '未成年人',
          body: ['本网站不面向儿童，我们不会在知情的情况下收集儿童的个人信息。'],
        },
        {
          n: '10',
          title: '跨境传输',
          body: [
            'Zero Agentic LLC 是美国实体。给我们发邮件意味着您的邮件在美国接收并存储。',
            '产品侧涉及的跨境传输，写在 Zero Kit 隐私政策里。',
          ],
        },
        {
          n: '11',
          title: '安全与泄露通知',
          body: [
            '我们对所持有的信息采取合理的技术与组织措施加以保护。没有任何传输或存储方式是绝对安全的，我们也不作此声称。',
            '若发生影响您个人信息的数据泄露，我们会按适用法律的要求，在知悉后不无故拖延地通知您与相关主管机关。',
          ],
        },
        {
          n: '12',
          title: '控制者与联系方式',
          body: [
            'Zero Agentic LLC 是本政策所述个人信息的控制者。',
            `邮寄地址：${COMPANY_ADDRESS_TEXT}`,
            `一切隐私事宜的联系方式：${CONTACT_EMAIL}`,
          ],
        },
        {
          n: '13',
          title: '变更',
          body: [
            '本政策发生实质性变更时，我们会更新上方的生效日期；若变更影响到我们已持有的信息，我们会直接联系受影响的个人。',
          ],
        },
        {
          n: '14',
          title: '联系',
          body: [`隐私问题与数据请求：${CONTACT_EMAIL}`],
        },
      ],
    },

    terms: {
      title: '服务条款 — Zero Agentic',
      description: '使用 Zero Agentic 公司网站所适用的条款。',
      heading: '服务条款',
      effectiveLabel: '生效日期',
      effective: '2026年9月19日',
      intro: '本条款适用于您对 Zero Agentic LLC 公司网站 zero-agentic.com 的使用。',
      clauses: [
        {
          n: '1',
          title: '协议的成立',
          body: ['使用本网站即表示您接受本条款。若您不接受，请勿使用本网站。'],
        },
        {
          n: '2',
          title: '关于本网站',
          body: [
            '本站为信息性网站，用于介绍 Zero Agentic LLC 以及我们运营的产品。',
            '本站的任何内容都不构成销售要约，也不构成任何所述能力将以所述形态存在的承诺。产品功能与价格以 zerokit.ai 上的说明为准，并可能在那里变更。',
          ],
        },
        {
          n: '3',
          title: 'Zero Kit',
          body: [
            'Zero Kit 的使用由它自己的协议约束，见 https://zerokit.ai/terms，以及与之一并公布的政策：https://zerokit.ai/privacy、https://zerokit.ai/refund、https://zerokit.ai/acceptable-use。',
            '账号、上传内容、生成产出、支付、退款与取消，均由上述文件约束，不由本条款约束。',
          ],
        },
        {
          n: '4',
          title: '内容与生成产出',
          body: [
            '本网站不接受上传，也不生成任何内容。您上传到 Zero Kit 的内容、以及它返回给您的产出，权属规则写在 Zero Kit 服务条款里：https://zerokit.ai/terms。',
          ],
        },
        {
          n: '5',
          title: '可接受使用',
          body: [
            '我们的产品禁止违法使用，禁止生成伤害真实人物、使其性化、冒充或歪曲其形象的内容。完整的禁止用途清单见 Zero Kit 可接受使用政策：https://zerokit.ai/acceptable-use。',
            '违反该政策的，我们可以暂停或终止其访问权限。',
          ],
        },
        {
          n: '6',
          title: '著作权投诉',
          body: [
            '针对我们产品上所存材料的涉嫌侵权通知，按 Zero Kit 服务条款处理：https://zerokit.ai/terms。',
          ],
        },
        {
          n: '7',
          title: '知识产权',
          body: [
            'Zero Agentic 与 Zero Kit 的名称、标识、站点设计与内容归我们或我们的许可方所有。本条款不授予您对上述内容的任何许可。',
          ],
        },
        {
          n: '8',
          title: '免责声明',
          body: [
            '本网站按“现状”与“现有”提供，不附带任何明示或默示的保证，包括适销性、特定用途适用性与不侵权。',
          ],
        },
        {
          n: '9',
          title: '责任限制',
          body: [
            '在法律允许的最大范围内，对于因您使用本网站而产生的间接、附带、特殊、后果性或惩罚性损害，以及利润、收入或数据的损失，Zero Agentic LLC 不承担责任。',
          ],
        },
        {
          n: '10',
          title: '赔偿',
          body: [
            '因您违反本条款、或因您使用本网站而产生的索赔、损害与合理费用，您同意向 Zero Agentic LLC 作出赔偿并使其免受损害。',
          ],
        },
        {
          n: '11',
          title: '争议解决',
          body: [
            '相比走法律程序，我们更愿意用邮件解决争议。在提起任何程序之前，请先联系我们，并给我们三十日的回应时间。',
            '若争议未能以此方式解决，应专属提交至美国怀俄明州谢里丹县的州法院或联邦法院，您与我们均同意接受该等法院的属人管辖。',
          ],
        },
        {
          n: '12',
          title: '适用法律',
          body: ['本条款适用美国怀俄明州法律，不适用其冲突法规则。'],
        },
        {
          n: '13',
          title: '一般条款',
          body: [
            '本条款任一条文若被认定不可执行，其余部分继续有效，且该条文仅在实现可执行所必需的最小范围内受到限缩。',
            '未经我们书面同意，您不得转让本条款。我们可在合并、收购或资产出售的情形下转让本条款。',
            '本条款连同隐私政策，构成您与 Zero Agentic LLC 之间就本网站达成的完整协议。产品部分另由 Zero Kit 的协议约束。',
            '未行使某一条文项下的权利，不构成对该权利的放弃。',
          ],
        },
        {
          n: '14',
          title: '变更',
          body: [
            '我们可能更新本条款。实质性变更将体现在上方的生效日期中。变更后继续使用即视为接受。',
          ],
        },
        {
          n: '15',
          title: '联系',
          body: [`关于本条款的问题：${CONTACT_EMAIL}`],
        },
      ],
    },
  },

  footer: {
    rights: 'Zero Agentic LLC. 保留所有权利。',
    columns: [
      {
        label: '文档',
        items: [
          { label: '概览', href: '/zh/' },
          { label: '产品', href: '/zh/products/' },
          { label: '关于', href: '/zh/about/' },
        ],
      },
      {
        label: '联系',
        items: [
          { label: '联系我们', href: '/zh/about/#contact' },
          { label: '笔记', href: '/zh/blog/' },
        ],
      },
      {
        label: '法务',
        items: [
          { label: '隐私政策', href: '/zh/privacy/' },
          { label: '服务条款', href: '/zh/terms/' },
        ],
      },
    ],
  },
}
