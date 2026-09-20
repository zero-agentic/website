import type { ISiteContent } from './types'
import { COMPANY_ADDRESS_TEXT, COMPANY_NAME, CONTACT_EMAIL } from './company-info'

/**
 * 英文站内容。
 *
 * 硬规则：这里只写可核对的事实。产品事实以 zerokit.ai 线上文案为准，
 * 公司事实以注册文件为准。没有来源的数字、客户、团队规模一律不写。
 * 不出现具体模型厂商或模型名称。
 */
export const en: ISiteContent = {
  locale: 'en',

  ui: {
    tbdExplain: 'To be determined — awaiting a confirmed fact from the company',
    footnote: 'Footnote',
    items: 'items',
    themeToggle: 'Switch between light and dark',
  },


  meta: {
    siteName: 'Zero Agentic',
    defaultDescription:
      'Zero Agentic LLC builds and operates AI creative software. Our first product is Zero Kit — an AI image generator, AI video generator and AI photo editor in one kit.',
  },

  nav: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'About', href: '/about/' },
      { label: 'Blog', href: '/blog/' },
    ],
    contactLabel: 'Contact',
    langLabel: '中文',
    skipToContent: 'Skip to content',
  },

  home: {
    title: 'AI Creative Software Company | Zero Agentic',
    description:
      'Zero Agentic LLC builds and operates AI creative software. Our first product, Zero Kit, generates images and video and edits photos — live at zerokit.ai.',
    heroLead: 'Zero Agentic',
    heroTrail: 'AI creative software.',

    generalDescription:
      'We build and operate AI creative software for individual creators and small businesses. Our first product, Zero Kit, takes a line of description or a photo and hands back finished work in seconds.',

    heroIndex: [
      { name: 'Image generation', note: 'A line of description, or a photo' },
      { name: 'Video generation', note: 'A description, or a starting image' },
      { name: 'Photo editing tools', note: 'Seven tools, one job each' },
    ],

    statusLabel: 'One product, live at zerokit.ai',
    contactCta: 'Get in touch',

    sections: {
      capabilities: {
        title: 'AI image generation, video generation and photo editing',
        intro:
          'Three things Zero Kit does. They ship inside one product, and none of them is sold separately.',
        items: [
          {
            name: 'Image generation',
            summary:
              'No prompt to write. Say a line or drop a photo, pick a style, and get finished images back in seconds.',
            specs: [
              { label: 'Input', value: 'A line of description, or a photo' },
              { label: 'Styles', value: '500+ presets' },
              { label: 'Categories', value: 'Logos, icons, posters, slide graphics' },
              { label: 'Also', value: 'Game art, portraits, beauty, restoration' },
            ],
          },
          {
            name: 'Video generation',
            summary:
              'The same idea for video: describe the shot, or hand it an image and let it move.',
            specs: [
              { label: 'Input', value: 'A description, or a starting image' },
              { label: 'Modes', value: 'Text to video, image to video' },
              { label: 'Runs in', value: 'The browser' },
            ],
          },
          {
            name: 'Photo editing tools',
            summary:
              'Seven single-purpose tools for the work that comes after a photo exists — widen it, clean it up, enlarge it, or set it in motion.',
            specs: [
              { label: 'Tools', value: '7' },
              { label: 'Repair', value: 'Object removal, inpainting, restoration' },
              { label: 'Resize', value: 'Outpainting, upscaling to 4K and 8K' },
              { label: 'Transform', value: 'Style transfer, image to video' },
            ],
          },
        ],
      },

      products: {
        title: 'Products',
        intro:
          'We have one product. It is live, everything we build goes into it, and you can open it right now.',
        entry: {
          name: 'Zero Kit',
          tagline: 'AI image generator, AI video generator and AI photo editor in one kit.',
          description:
            'No prompts to write: say a line or drop a photo, and finished work comes back in seconds, across 500+ styles. Built for individual creators and small businesses.',
          specs: [
            { label: 'Status', value: 'Live', stamp: true },
            { label: 'Availability', value: 'zerokit.ai', href: 'https://zerokit.ai' },
            { label: 'Runs in', value: 'The browser' },
          ],
          scope: [],
        },
        readMore: 'See the details',
      },
    },
  },

  products: {
    title: 'Zero Kit — AI Image, Video and Photo Editing | Zero Agentic',
    description:
      'Zero Kit is the AI image generator, AI video generator and AI photo editor operated by Zero Agentic LLC, live at zerokit.ai for individual creators and small businesses.',
    heading: 'AI creative software',
    intro:
      'Zero Kit is the product Zero Agentic builds and operates. It has been publicly available at zerokit.ai since September 2026. Below is what it covers today.',
    entry: {
      name: 'Zero Kit',
      tagline: 'AI image generator, AI video generator and AI photo editor in one kit.',
      description:
        'Most tools hand you a prompt box and expect you to learn how to talk to it. Zero Kit does not. Say a line or drop a photo, pick from more than 500 styles, and finished work comes back in seconds — images, video, or an edit of a photo you already have.',
      specs: [
        { label: 'Status', value: 'Live', stamp: true },
        { label: 'Availability', value: 'zerokit.ai', href: 'https://zerokit.ai' },
        { label: 'Runs in', value: 'The browser' },
        { label: 'Styles', value: '500+ presets' },
        { label: 'Interface', value: '19 languages' },
        { label: 'Editing tools', value: '7', ref: 1 },
        { label: 'Payment', value: 'Subscriptions and credit packs', ref: 2 },
        { label: 'Pricing', value: 'zerokit.ai/pricing', href: 'https://zerokit.ai/pricing' },
        { label: 'Free tier', value: 'Free daily credits' },
        { label: 'Models', value: 'Licensed third-party APIs', ref: 3 },
      ],
      scope: [
        {
          name: 'Image generation',
          detail:
            'A line of description or a photo goes in, finished images come back, across more than 500 style presets.',
        },
        {
          name: 'Logos and icons',
          detail: 'Marks for brands, apps and sites, made from a description or a reference image.',
        },
        {
          name: 'Posters and slide graphics',
          detail: 'Poster layouts, and artwork for slides and presentations.',
        },
        {
          name: 'Game art',
          detail: 'Scenery, props and characters, in the style you pick.',
        },
        {
          name: 'Wedding, couple and baby portraits',
          detail: 'Portrait sets built from photographs you already have.',
        },
        {
          name: 'Beauty retouching',
          detail: 'Portrait retouching on photos you upload.',
        },
        {
          name: 'Photo restoration',
          detail: 'Old, damaged or blurred photographs brought back.',
        },
        {
          name: 'Video generation',
          detail: 'Describe a shot and get video, or hand over an image and let it move.',
        },
        {
          name: 'Editing tools',
          detail:
            'Seven tools, one job each: extend an image, remove an object, repaint an area, upscale to 4K or 8K, restore a photo, transfer a style, animate a still.',
        },
      ],
    },
    scopeLabel: 'What it covers',
    scopeNote: 'What Zero Kit covers today. Each item is available at zerokit.ai.',
    specLabel: 'At a glance',
    footnotes: [
      {
        n: 1,
        text: 'Image extender, object remover, inpainting tool, image upscaler, photo restoration, style transfer, and image to video. Each one is a separate page under zerokit.ai/tools.',
      },
      {
        n: 2,
        text: 'Monthly or yearly subscriptions, plus one-time credit packs. Pricing is published at zerokit.ai/pricing.',
      },
      {
        n: 3,
        text: 'Zero Kit is an independent product. The models behind it are reached through licensed third-party APIs, and Zero Kit is not affiliated with, sponsored by, or endorsed by any model provider.',
      },
    ],
  },

  about: {
    title: 'About Zero Agentic | AI Creative Software Company',
    description:
      'Zero Agentic LLC is a Wyoming limited liability company formed in September 2026. It builds and operates AI creative software; its first product is Zero Kit.',
    heading: 'About Zero Agentic',
    statement: [
      'Zero Agentic LLC builds and operates AI creative software. It is a limited liability company formed in Wyoming in September 2026.',
      'Our first product is Zero Kit — an AI image generator, AI video generator and AI photo editor in one kit, publicly available at zerokit.ai since September 2026. It is made for individual creators and small businesses, runs in the browser in 19 interface languages, and is paid for through monthly or yearly subscriptions and one-time credit packs, alongside free daily credits.',
      `Questions about the company, the product, billing, legal or privacy all reach us at ${CONTACT_EMAIL}.`,
    ],
    servicesLabel: 'What we do',
    services: [
      {
        title: 'Product development',
        body: 'We design, build and operate Zero Kit. It is our only product, and everything we ship goes into it.',
      },
      {
        title: 'Model integration',
        body: 'We integrate licensed third-party model APIs into the product and review the content that moves through them.',
      },
      {
        title: 'Customer support',
        body: 'We answer product, account and billing questions by email, in the same place as legal and privacy requests.',
      },
      {
        title: 'Content safety and compliance',
        body: 'We maintain an acceptable use policy, screen prompts and uploads against it, and act on reports of misuse.',
      },
    ],
    factsLabel: 'The company',
    facts: [
      { label: 'Legal name', value: COMPANY_NAME },
      { label: 'Entity type', value: 'Wyoming limited liability company' },
      { label: 'Formed', value: 'September 2026' },
      { label: 'Mailing address', value: COMPANY_ADDRESS_TEXT },
      { label: 'Product', value: 'Zero Kit', href: 'https://zerokit.ai' },
      { label: 'Website', value: 'zero-agentic.com', href: 'https://zero-agentic.com' },
    ],
    contact: {
      heading: 'Contact',
      body: 'For support, partnerships, press, legal, or privacy inquiries, email us at:',
      email: CONTACT_EMAIL,
    },
  },

  blog: {
    title: 'AI Image & Video Generation Notes | Zero Agentic',
    description:
      'Zero Agentic notes on AI image generation, AI video generation and turning generated media into work you can actually use.',
    heading: 'AI generation notes',
    intro:
      'Notes on what we are building and why. Posted when there is something worth writing down, not on a schedule.',
    empty: 'No entries recorded yet.',
    backLabel: 'All notes',
    publishedLabel: 'Published',
    updatedLabel: 'Revised',
  },

  legal: {
    privacy: {
      title: 'Privacy Policy — Zero Agentic',
      description:
        'How Zero Agentic LLC collects, uses, and retains personal information on zero-agentic.com.',
      heading: 'Privacy Policy',
      effectiveLabel: 'Effective',
      effective: 'September 19, 2026',
      intro:
        'This policy describes how Zero Agentic LLC (“Zero Agentic”, “we”) handles personal information on this website, zero-agentic.com.',
      clauses: [
        {
          n: '1',
          title: 'Scope',
          body: [
            'This policy covers zero-agentic.com, the company website, and nothing else.',
            'Our product, Zero Kit, is governed by its own privacy policy at https://zerokit.ai/privacy. Accounts, uploads, generated output and payments belong to that policy, not to this one.',
            'This website is a static site. It has no accounts, no comment system, and no forms that submit to us. Visiting it does not create a record on our systems beyond what our hosting provider logs.',
          ],
        },
        {
          n: '2',
          title: 'Information collected on this website',
          body: [
            'We set no cookies and run no analytics or advertising trackers on this site.',
            'The site is served by GitHub Pages. GitHub processes request logs, which include IP addresses, as part of delivering the site. That processing is governed by GitHub’s own privacy statement and is outside our control.',
            'Fonts are self-hosted. Loading a page on this site does not send a request to any third-party font, analytics, or CDN provider.',
          ],
        },
        {
          n: '3',
          title: 'Information collected when you contact us',
          body: [
            'If you email us, we receive your address, your message, and anything you attach. We keep that correspondence for as long as needed to handle the matter and to maintain a record of it.',
            'We do not add correspondents to a marketing list.',
          ],
        },
        {
          n: '4',
          title: 'Product data',
          body: [
            'This website collects no product data. What Zero Kit collects, how long it keeps it, and who it is shared with is set out in the Zero Kit Privacy Policy at https://zerokit.ai/privacy.',
          ],
        },
        {
          n: '5',
          title: 'Legal bases for processing',
          body: [
            'Where the GDPR or UK GDPR applies to the processing described here, we rely on: legitimate interests, for handling correspondence and securing our systems; consent, where we ask for it; and legal obligation, where a law requires us to retain or disclose information.',
            'Consent, where it is the basis, can be withdrawn at any time without affecting processing already carried out.',
          ],
        },
        {
          n: '6',
          title: 'Sale and sharing of personal information',
          body: [
            'We do not sell personal information, and we do not share it for cross-context behavioural advertising, as those terms are defined under the California Consumer Privacy Act.',
            'We have never done so. If that position ever changes, we will publish the change and provide the opt-out mechanism the statute requires before it takes effect.',
            'We do not knowingly sell or share the personal information of anyone under 16.',
          ],
        },
        {
          n: '7',
          title: 'Your rights',
          body: [
            'Depending on where you live, you may have the right to access, correct, export, or delete personal information we hold, to object to or restrict its processing, and to withdraw consent. Residents of California, and residents of the EEA and UK, have specific statutory rights in this area.',
            'To exercise any of them, email us. We do not charge for this, and we will not treat you differently for asking.',
            'If you are in the EEA or UK and you are not satisfied with how we have handled a request, you have the right to lodge a complaint with your national data protection supervisory authority.',
          ],
        },
        {
          n: '8',
          title: 'Retention',
          body: [
            'Correspondence is kept while the matter is open and for a reasonable period afterwards.',
            'Retention inside the product is described in the Zero Kit Privacy Policy.',
          ],
        },
        {
          n: '9',
          title: 'Children',
          body: [
            'This website is not directed to children and we do not knowingly collect personal information from them.',
          ],
        },
        {
          n: '10',
          title: 'International transfers',
          body: [
            'Zero Agentic LLC is a United States entity. Emailing us means your message is received and stored in the United States.',
            'Transfers carried out in connection with the product are described in the Zero Kit Privacy Policy.',
          ],
        },
        {
          n: '11',
          title: 'Security and breach notification',
          body: [
            'We take reasonable technical and organisational measures to protect information in our care. No method of transmission or storage is completely secure, and we do not claim otherwise.',
            'If a breach affects your personal information, we will notify you and the relevant authorities as the applicable law requires, and without undue delay after we become aware of it.',
          ],
        },
        {
          n: '12',
          title: 'Controller and contact details',
          body: [
            'Zero Agentic LLC is the controller of the personal information described in this policy.',
            `Mailing address: ${COMPANY_ADDRESS_TEXT}`,
            `Contact for all privacy matters: ${CONTACT_EMAIL}`,
          ],
        },
        {
          n: '13',
          title: 'Changes',
          body: [
            'When this policy changes materially we will update the effective date and, where the change affects information we already hold, contact affected people directly.',
          ],
        },
        {
          n: '14',
          title: 'Contact',
          body: [`Privacy questions and data requests: ${CONTACT_EMAIL}`],
        },
      ],
    },

    terms: {
      title: 'Terms of Service — Zero Agentic',
      description: 'The terms governing use of the Zero Agentic company website.',
      heading: 'Terms of Service',
      effectiveLabel: 'Effective',
      effective: 'September 19, 2026',
      intro:
        'These terms govern your use of zero-agentic.com, the company website of Zero Agentic LLC.',
      clauses: [
        {
          n: '1',
          title: 'Agreement',
          body: [
            'By using this website you agree to these terms. If you do not agree, do not use it.',
          ],
        },
        {
          n: '2',
          title: 'The website',
          body: [
            'This site is informational. It describes Zero Agentic LLC and the product we operate.',
            'Nothing on this site is an offer to sell or a commitment that any described capability will exist in the form described. Product features and pricing are stated at zerokit.ai and can change there.',
          ],
        },
        {
          n: '3',
          title: 'Zero Kit',
          body: [
            'Use of Zero Kit is governed by its own agreement at https://zerokit.ai/terms, together with the policies published alongside it: https://zerokit.ai/privacy, https://zerokit.ai/refund, and https://zerokit.ai/acceptable-use.',
            'Accounts, uploaded content, generated output, payment, refunds and cancellation are covered by those documents, not by these terms.',
          ],
        },
        {
          n: '4',
          title: 'Content and generated output',
          body: [
            'This website accepts no uploads and generates nothing. Ownership of content you upload to Zero Kit, and of the output it returns to you, is set out in the Zero Kit Terms of Service at https://zerokit.ai/terms.',
          ],
        },
        {
          n: '5',
          title: 'Acceptable use',
          body: [
            'Our product prohibits unlawful use and the generation of material that harms, sexualises, impersonates or misrepresents real people. The full list of prohibited uses is in the Zero Kit Acceptable Use Policy at https://zerokit.ai/acceptable-use.',
            'We may suspend or terminate access for violations of that policy.',
          ],
        },
        {
          n: '6',
          title: 'Copyright complaints',
          body: [
            'Notices of alleged copyright infringement concerning material stored on our product are handled under the Zero Kit Terms of Service at https://zerokit.ai/terms.',
          ],
        },
        {
          n: '7',
          title: 'Intellectual property',
          body: [
            'The Zero Agentic and Zero Kit names, marks, site design, and content are ours or our licensors’. These terms grant you no licence to them.',
          ],
        },
        {
          n: '8',
          title: 'No warranty',
          body: [
            'This website is provided “as is” and “as available”, without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
          ],
        },
        {
          n: '9',
          title: 'Limitation of liability',
          body: [
            'To the maximum extent permitted by law, Zero Agentic LLC is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or data, arising from your use of this website.',
          ],
        },
        {
          n: '10',
          title: 'Indemnification',
          body: [
            'You agree to indemnify and hold harmless Zero Agentic LLC against claims, damages, and reasonable costs arising from your breach of these terms or from your use of this website.',
          ],
        },
        {
          n: '11',
          title: 'Dispute resolution',
          body: [
            'We would rather resolve a dispute by email than in a forum. Before filing anything, contact us and give us thirty days to respond.',
            'If a dispute is not resolved that way, it is brought exclusively in the state or federal courts located in Sheridan County, Wyoming, and you and we each consent to the personal jurisdiction of those courts.',
          ],
        },
        {
          n: '12',
          title: 'Governing law',
          body: [
            'These terms are governed by the laws of the State of Wyoming, United States, without regard to conflict-of-laws rules.',
          ],
        },
        {
          n: '13',
          title: 'General',
          body: [
            'If any provision of these terms is held unenforceable, the remainder stays in effect and the unenforceable provision is limited to the minimum extent necessary.',
            'You may not assign these terms without our written consent. We may assign them in connection with a merger, acquisition, or sale of assets.',
            'These terms, together with the Privacy Policy, are the entire agreement between you and Zero Agentic LLC regarding this website. The Zero Kit agreement covers the product separately.',
            'A failure to enforce a provision is not a waiver of it.',
          ],
        },
        {
          n: '14',
          title: 'Changes',
          body: [
            'We may update these terms. Material changes will be reflected in the effective date above. Continued use after a change constitutes acceptance.',
          ],
        },
        {
          n: '15',
          title: 'Contact',
          body: [`Questions about these terms: ${CONTACT_EMAIL}`],
        },
      ],
    },
  },

  footer: {
    rights: 'Zero Agentic LLC. All rights reserved.',
    columns: [
      {
        label: 'Document',
        items: [
          { label: 'Overview', href: '/' },
          { label: 'Products', href: '/products/' },
          { label: 'About', href: '/about/' },
        ],
      },
      {
        label: 'Contact',
        items: [
          { label: 'Contact', href: '/about/#contact' },
          { label: 'Notes', href: '/blog/' },
        ],
      },
      {
        label: 'Legal',
        items: [
          { label: 'Privacy Policy', href: '/privacy/' },
          { label: 'Terms of Service', href: '/terms/' },
        ],
      },
    ],
  },
}
