import type { ISiteContent } from './types'
import { CONTACT_EMAIL } from './contact-email'

/**
 * 英文站内容。
 *
 * 硬规则：这里只写可核对的事实。公司成立年份、注册地、团队等尚未由业务方
 * 提供的事实一律写 null，渲染为 TBD 占位，绝不用行业套话填充。
 * 联系邮箱是唯一的例外，理由见 contact-email.ts。
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
      'Zero Agentic is an AI image and video generation company building tools that turn generated media into production-ready design files.',
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
    title: 'AI Image & Video Generation Company | Zero Agentic',
    description:
      'Zero Agentic builds AI image and video generation tools that deliver production-ready logos, icons, illustrations and video for brands and creators.',
    heroLead: 'Zero Agentic',
    heroTrail: 'AI generation, delivered.',

    generalDescription:
      'AI image generation and AI video generation for brands, developers and creators, carried through to logos, icons, illustrations and video you can put straight to use.',

    heroIndex: [
      { name: 'Image synthesis', note: 'A description, or reference images' },
      { name: 'Video synthesis', note: 'A description, or a starting frame' },
      { name: 'Done for you', note: 'Say what you need, then step away' },
    ],

    statusLabel: 'One product in development',
    contactCta: 'Get in touch',

    sections: {
      capabilities: {
        n: '1',
        title: 'AI image and video generation',
        intro:
          'Three things we are building. All of them are still in development and will arrive inside the product under 02 — none is sold separately today.',
        items: [
          {
            name: 'Image synthesis',
            summary:
              'Describe what you want, or hand it a reference. Redraw any part of the result, set the exact size you need, and take it away as vector when the job calls for one.',
            specs: [
              { label: 'Input', value: 'A description, or reference images' },
              { label: 'Editing', value: 'Redraw any area you select' },
              { label: 'Size', value: 'Exactly what you ask for' },
              { label: 'Vector', value: 'SVG' },
            ],
          },
          {
            name: 'Video synthesis',
            summary:
              'The same idea for video: describe a shot or give it a frame to work from. Long jobs run in the background — close the tab and nothing is lost.',
            specs: [
              { label: 'Input', value: 'A description, or a starting frame' },
              { label: 'Jobs', value: 'Run in the background' },
              { label: 'Length', value: '4 to 30 seconds' },
              { label: 'Formats', value: 'MP4, MOV' },
            ],
          },
          {
            name: 'Done for you',
            summary:
              'Say what you need, then step away. It keeps working without you clicking through it, and hands back finished files.',
            specs: [
              { label: 'How', value: 'Just say what you need' },
              { label: 'While it runs', value: 'Go do something else' },
              { label: 'If it stops', value: 'Picks up where it left off' },
              { label: 'You get', value: 'Files you can use as they are' },
            ],
          },
        ],
      },

      products: {
        n: '2',
        title: 'Products',
        intro:
          'We have one product and it is not out yet. So there is no trial button here and no countdown — we do not have a launch date we could stand behind.',
        entry: {
          name: 'DesignDance',
          tagline: 'Finished design files, not just pictures.',
          description:
            'Built for people who need finished files, not just a picture. Logos come back as vector. App icons come back in every size at once. Restored photos come back big enough to print.',
          specs: [
            { label: 'Status', value: 'In development', stamp: true },
            { label: 'Availability', value: null },
            { label: 'Runs in', value: 'The browser' },
          ],
          scope: [],
        },
        readMore: 'See the details',
      },

      contact: {
        n: '3',
        title: 'Contact',
        intro:
          'We read and answer our own mail. No ticket system, nobody in the middle.',
        cta: 'All the ways to reach us',
      },
    },
  },

  products: {
    title: 'DesignDance AI Design Generator | Zero Agentic',
    description:
      'DesignDance is an AI design generator for logos, app icons, posters, game assets and photo restoration. Currently in development at Zero Agentic.',
    n: '2',
    heading: 'AI design generation',
    intro:
      'DesignDance is an AI design generator in development at Zero Agentic. It is not yet available. The scope below is planned, not a list of features that already work.',
    entry: {
      name: 'DesignDance',
      tagline: 'Finished design files, not just pictures.',
      description:
        'Most AI tools hand you an image and stop there. But a logo you cannot scale is not a logo, an icon that exists at one size will not pass review, and a restored photo that falls apart in print was not really restored. DesignDance is built around the file you need at the end, not the prompt you type at the start.',
      specs: [
          { label: 'Status', value: 'In development', stamp: true },
        { label: 'Availability', value: null },
        { label: 'Runs in', value: 'The browser' },
        { label: 'Vector', value: 'SVG' },
        { label: 'Icon sizes', value: '16 to 1024 px, all of them' },
        { label: 'Platforms', value: 'Web, iOS, Android, desktop', ref: 1 },
        { label: 'Pricing', value: null, ref: 2 },
      ],
      scope: [
        {
          name: 'Logo generation',
          detail:
            'For websites, apps and store listings. You get the vector original plus every size rendered down from it.',
        },
        {
          name: 'Icon generation',
          detail:
            'Browser favicons and app icons, packaged the way each platform wants them — iOS, Android and desktop included.',
        },
        {
          name: 'Commerce and campaign posters',
          detail:
            'Layouts for online stores, events, product launches and ads, across a wide range of styles.',
        },
        {
          name: 'Game assets',
          detail: 'Scenery, props, characters, and the frames that make them move.',
        },
        {
          name: 'Photo restoration',
          detail:
            'Blurred, damaged or tiny old photos brought back to a size you can actually use.',
        },
        {
          name: 'Wedding and ceremonial portraits',
          detail:
            'One or two photos become portraits in the period or regional style you pick.',
        },
        {
          name: 'Infant milestone portraits',
          detail: 'Milestone portrait sets made from the photos you already have.',
        },
      ],
    },
    scopeLabel: 'What it will cover',
    scopeNote:
      'What we plan to cover. Not a feature list, not a promise, and likely to change before launch.',
    specLabel: 'At a glance',
    footnotes: [
      { n: 1, text: 'Each platform gets the packaging format it expects, all from one source file.' },
      { n: 2, text: 'Not set. Pricing will be published before the product is available.' },
    ],
  },

  about: {
    title: 'About Zero Agentic | AI Generation Company',
    description:
      'Zero Agentic LLC is an AI image and video generation company building tools that turn generated media into usable design files.',
    n: '4',
    heading: 'About Zero Agentic',
    statement: [
      'Zero Agentic is a company building AI image and video generation.',
      'The gap we work in is narrow and specific. AI has become very good at making a picture, and completely indifferent to whether you can use it. You needed vector and got pixels. You needed seven icon sizes and got one. You were going to print it and got something sized for a screen. The hard part is no longer making the image — it is everything that has to be true about the file afterwards.',
      'We are early. One product is in development and nothing is public yet. This page will get longer as there is more we can honestly say.',
    ],
    principlesLabel: 'How we work',
    principles: [
      {
        title: 'Deliver something you can use',
        body: 'We do not measure ourselves by how fast or how striking the output is. We measure it by whether what you receive can go straight where it is needed — onto a sign, into a store, off to print.',
      },
      {
        title: 'Keep the complexity on our side',
        body: 'Formats, sizes, colour, resolution — handling those is the tool’s job. Yours is to say what you want.',
      },
      {
        title: 'The creator decides',
        body: 'AI is here to widen what you can make, not to make the choices for you. What you create is yours; our job is to make it easier to finish.',
      },
      {
        title: 'Only claim what holds',
        body: 'We say where the product actually stands and promise only what is already true. Customers and investors get the same account.',
      },
    ],
    factsLabel: 'The company',
    facts: [
      { label: 'Legal name', value: 'Zero Agentic LLC' },
      { label: 'Entity type', value: 'Limited liability company' },
      { label: 'Jurisdiction', value: null },
      { label: 'Founded', value: null },
      { label: 'Registered office', value: null },
      { label: 'Team size', value: null },
      { label: 'Domain', value: 'zero-agentic.com', href: 'https://zero-agentic.com' },
    ],
    footnotes: [],
  },

  contact: {
    title: 'Contact Zero Agentic | Partnerships, Press & Careers',
    description:
      'Contact Zero Agentic LLC about AI generation partnerships, press enquiries, careers, legal matters or privacy requests.',
    n: '3',
    heading: 'Contact Zero Agentic',
    intro:
      'Email is the only way in, and it reaches a person directly. No ticket system, no chat widget, nobody in the middle.',
    email: CONTACT_EMAIL,
    channelsLabel: 'What you can write about',
    channels: [
      {
        label: 'Partnerships',
        detail: 'An integration, distribution, or building something together — tell us what you have in mind.',
        email: CONTACT_EMAIL,
      },
      {
        label: 'Press',
        detail: "You're a journalist or analyst and need material, an interview, or a fact checked.",
        email: CONTACT_EMAIL,
      },
      {
        label: 'Careers',
        detail: 'We have nothing posted right now, but the mail you send still gets read.',
        email: CONTACT_EMAIL,
      },
      {
        label: 'Legal and privacy',
        detail: 'A data request, or anything you want to ask about the Privacy Policy (05) or Terms (06).',
        email: CONTACT_EMAIL,
      },
    ],
    footnotes: [],
  },

  blog: {
    title: 'AI Image & Video Generation Notes | Zero Agentic',
    description:
      'Zero Agentic notes on AI image generation, AI video generation and turning generated media into production-ready design files.',
    n: '7',
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
      n: '5',
      title: 'Privacy Policy — Zero Agentic',
      description: 'How Zero Agentic LLC collects, uses, and retains personal information.',
      heading: 'Privacy Policy',
      effectiveLabel: 'Effective',
      effective: 'September 6, 2026',
      intro:
        'This policy describes how Zero Agentic LLC (“Zero Agentic”, “we”) handles personal information across this website and, once released, our products.',
      clauses: [
        {
          n: '1',
          title: 'Scope',
          body: [
            'This policy covers zero-agentic.com and any Zero Agentic product that links to it.',
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
            'Our products are not released. When they are, this section will describe account data, uploaded content, generated output, and payment handling, and will be updated before the product is made available.',
            'Until that time no product data is collected, because there is no product to collect it.',
          ],
        },
        {
          n: '5',
          title: 'Uploaded images and biometric information',
          body: [
            'Several planned product features work from photographs of people — portrait restoration, ceremonial portraits, and infant milestone portraits among them. A photograph of a face may constitute biometric information under laws including the Illinois Biometric Information Privacy Act and the Texas Capture or Use of Biometric Identifier Act.',
            'Before any such feature is released, we will publish what is extracted from an uploaded image, how long it is kept, whether it leaves our systems, and how to have it deleted — and we will obtain the consent those laws require.',
            'This clause is stated here in advance so that the commitment exists before the feature does.',
          ],
        },
        {
          n: '6',
          title: 'Synthetic content and transparency',
          body: [
            'Our products produce synthetic images and video. Article 50 of the EU Artificial Intelligence Act requires that such output be marked in a machine-readable format and, for certain categories, disclosed to the people who encounter it.',
            'Before release we will publish how generated output is marked, which provenance standard we implement, and what a recipient can verify. Our current intent is durable provenance metadata following the C2PA specification.',
            'We will not remove or suppress provenance markings from output we generate.',
          ],
        },
        {
          n: '7',
          title: 'Model training',
          body: [
            'We do not train models on customer-uploaded content without separate, specific, opt-in consent.',
            'Where a generation request is served by a third-party model provider, that provider’s own terms govern what it does with the request. Before release we will name every such provider, and state for each whether it may retain or train on request data — and where a provider’s terms permit training we will say so plainly rather than defer to a linked document.',
          ],
        },
        {
          n: '8',
          title: 'Legal bases for processing',
          body: [
            'Where the GDPR or UK GDPR applies, we rely on: performance of a contract, for processing needed to provide a service you asked for; legitimate interests, for handling correspondence and securing our systems; consent, for biometric processing and for any model training on your content; and legal obligation, where a law requires us to retain or disclose information.',
            'Consent, where it is the basis, can be withdrawn at any time without affecting processing already carried out.',
          ],
        },
        {
          n: '9',
          title: 'Sale and sharing of personal information',
          body: [
            'We do not sell personal information, and we do not share it for cross-context behavioural advertising, as those terms are defined under the California Consumer Privacy Act.',
            'We have never done so. If that position ever changes, we will publish the change and provide the opt-out mechanism the statute requires before it takes effect.',
            'We do not knowingly sell or share the personal information of anyone under 16.',
          ],
        },
        {
          n: '10',
          title: 'Your rights',
          body: [
            'Depending on where you live, you may have the right to access, correct, export, or delete personal information we hold, to object to or restrict its processing, and to withdraw consent. Residents of California, and residents of the EEA and UK, have specific statutory rights in this area.',
            'To exercise any of them, email us. We do not charge for this, and we will not treat you differently for asking.',
            'If you are in the EEA or UK and you are not satisfied with how we have handled a request, you have the right to lodge a complaint with your national data protection supervisory authority.',
          ],
        },
        {
          n: '11',
          title: 'Retention',
          body: [
            'Correspondence is kept while the matter is open and for a reasonable period afterwards.',
            'Product retention periods are not yet set and will be published before the product is released.',
          ],
        },
        {
          n: '12',
          title: 'Children',
          body: [
            'This website is not directed to children and we do not knowingly collect personal information from them.',
            'The planned infant portrait feature works from photographs supplied by an adult. The consent and handling rules for that case will be published with the feature.',
          ],
        },
        {
          n: '13',
          title: 'International transfers',
          body: [
            'Zero Agentic is a United States entity and our providers are largely US-based. Using this site or our products may involve transferring information to the United States.',
            'Where we transfer personal information out of the EEA or UK, we will identify the transfer mechanism we rely on before any product processing begins.',
          ],
        },
        {
          n: '14',
          title: 'Security and breach notification',
          body: [
            'We take reasonable technical and organisational measures to protect information in our care. No method of transmission or storage is completely secure, and we do not claim otherwise.',
            'If a breach affects your personal information, we will notify you and the relevant authorities as the applicable law requires, and without undue delay after we become aware of it.',
          ],
        },
        {
          n: '15',
          title: 'Controller and contact details',
          body: [
            'Zero Agentic LLC is the controller of the personal information described in this policy.',
            'Our registered office address is not yet published on this site and appears as TBD on the About page. It will be stated here before this policy takes effect.',
            `Contact for all privacy matters: ${CONTACT_EMAIL}`,
          ],
        },
        {
          n: '16',
          title: 'Changes',
          body: [
            'When this policy changes materially we will update the effective date and, where the change affects information we already hold, contact affected people directly.',
          ],
        },
        {
          n: '17',
          title: 'Contact',
          body: [`Privacy questions and data requests: ${CONTACT_EMAIL}`],
        },
      ],
    },

    terms: {
      n: '6',
      title: 'Terms of Service — Zero Agentic',
      description: 'The terms governing use of the Zero Agentic website and products.',
      heading: 'Terms of Service',
      effectiveLabel: 'Effective',
      effective: 'September 6, 2026',
      intro:
        'These terms govern your use of zero-agentic.com and, once released, the products operated by Zero Agentic LLC.',
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
            'This site is informational. It describes a company and a product that is in development.',
            'Nothing on this site is an offer to sell, a commitment to release, or a guarantee that any described capability will exist in the form described. Statements about products in development are statements of current intent.',
          ],
        },
        {
          n: '3',
          title: 'Products',
          body: [
            'Our products are not released. Product-specific terms — accounts, acceptable use, content licensing, output ownership, payment, and cancellation — will be published as a separate agreement before any product is made available, and using a product will require accepting it.',
          ],
        },
        {
          n: '4',
          title: 'Your content',
          body: [
            'When product terms take effect, content you upload remains yours. We will take only the licence needed to operate the service on your behalf — to store your content, process it, and return the result to you.',
            'You will be responsible for having the rights to what you upload, including the consent of any identifiable person in a photograph.',
          ],
        },
        {
          n: '5',
          title: 'Generated output',
          body: [
            'The legal status of AI-generated material is unsettled and varies by jurisdiction. In the United States, works produced without sufficient human authorship may not be eligible for copyright protection.',
            'We will assign to you whatever rights in generated output we are able to assign. We cannot warrant that output is protectable, that it is free of resemblance to existing works, or that using it will not infringe a third party’s rights.',
            'Generated output will carry provenance markings as described under 06 of the Privacy Policy. Removing or falsifying those markings is a breach of these terms.',
          ],
        },
        {
          n: '6',
          title: 'Acceptable use',
          body: [
            'You may not use our products to generate material that is unlawful; that sexualises minors, including the synthetic depictions California Assembly Bill 1831 addresses; that depicts a real person without their consent in a sexual, defamatory, or deceptive context; that impersonates a person or entity in order to deceive; or that infringes another party’s intellectual property.',
            'Generating a real person’s likeness or voice without authorisation may also violate digital-replica and right-of-publicity laws, including the Tennessee ELVIS Act and California Assembly Bills 1836 and 2602. Nonconsensual sexually explicit depictions carry separate liability under laws such as California Assembly Bill 602. Compliance is your responsibility.',
            'We may suspend or terminate access for violations of this clause.',
          ],
        },
        {
          n: '7',
          title: 'Copyright complaints',
          body: [
            'We will respond to notices of alleged copyright infringement concerning material stored on our services in accordance with the Digital Millennium Copyright Act.',
            'Our designated agent for receiving such notices, and the address for submitting them, will be registered and published here before any service that hosts user content is made available.',
          ],
        },
        {
          n: '8',
          title: 'Intellectual property',
          body: [
            'The Zero Agentic name, marks, site design, and content are ours or our licensors’. These terms grant you no licence to them.',
          ],
        },
        {
          n: '9',
          title: 'No warranty',
          body: [
            'This website is provided “as is” and “as available”, without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
          ],
        },
        {
          n: '10',
          title: 'Limitation of liability',
          body: [
            'To the maximum extent permitted by law, Zero Agentic LLC is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or data, arising from your use of this website.',
          ],
        },
        {
          n: '11',
          title: 'Indemnification',
          body: [
            'You agree to indemnify and hold harmless Zero Agentic LLC against claims, damages, and reasonable costs arising from your breach of these terms, from content you supply, or from your use of generated output — including claims that such use infringed a third party’s rights.',
          ],
        },
        {
          n: '12',
          title: 'Dispute resolution',
          body: [
            'We would rather resolve a dispute by email than in a forum. Before filing anything, contact us and give us thirty days to respond.',
            'Whether disputes are resolved by arbitration, and whether class actions are waived, is to be determined and will be stated here before these terms take effect. Nothing here currently waives any right you would otherwise have.',
          ],
        },
        {
          n: '13',
          title: 'Governing law',
          body: [
            'These terms are governed by the laws of the jurisdiction in which Zero Agentic LLC is organised, without regard to conflict-of-laws rules. The specific jurisdiction and venue are to be determined and will be stated here before these terms take effect.',
          ],
        },
        {
          n: '14',
          title: 'General',
          body: [
            'If any provision of these terms is held unenforceable, the remainder stays in effect and the unenforceable provision is limited to the minimum extent necessary.',
            'You may not assign these terms without our written consent. We may assign them in connection with a merger, acquisition, or sale of assets.',
            'These terms, together with any product-specific agreement and the Privacy Policy, are the entire agreement between you and Zero Agentic LLC regarding this website.',
            'A failure to enforce a provision is not a waiver of it.',
          ],
        },
        {
          n: '15',
          title: 'Changes',
          body: [
            'We may update these terms. Material changes will be reflected in the effective date above. Continued use after a change constitutes acceptance.',
          ],
        },
        {
          n: '16',
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
          { label: 'Contact', href: '/contact/' },
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
