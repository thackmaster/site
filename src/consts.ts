import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'thackmaster',
  description:
    'the website for the guy that does a lot of tech stuff sometimes.',
  href: 'https://thackmaster.com',
  author: 'thackmaster',
  locale: 'en-US',
  featuredPostCount: 5,
  postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/thackmaster',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/thackmaster',
    label: 'Twitter',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
