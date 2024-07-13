import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/TommyNguyen14',
  linkedin: 'https://www.linkedin.com/in/tommy-nguyen14/',
  mail: 'mailto:tommy.nguy14@gmail.com',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Information Technology',
    institution: 'George Mason University',
    link: 'https://www.gmu.edu/',
    date: '2022 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Crosshair Cyber',
    location: 'Fairfax, VA',
    position: 'Cybersecurity Intern',
    start: 'May 2024',
    link: 'https://crosshaircyber.com/',
    end: 'Current',
    tasks: [
      'Reviewed vulnerability assessments and penetration tests on internal networks, applications, and systems to identify security weaknesses.',
      ' Participated in regular team meetings and knowledge-sharing sessions to learn about current cybersecurity threats, trends, and best practices.',
      ' Attended discussions on networking and penetration testing methodologies, gaining insights from experienced cybersecurity professionals.',
    ],
  },
]
