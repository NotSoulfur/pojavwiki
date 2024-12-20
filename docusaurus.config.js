import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Pojavlauncher',
  tagline: 'A flexible, fast and open-source Minecraft Java Edition launcher for Android and iOS',
  favicon: 'img/pojavlauncher.ico',
  url: 'https://github.com',
  baseUrl: '/pojavwiki/',
  organizationName: 'NotSoulfur',
  projectName: 'pojavwiki',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Pojavlauncher Wiki',
      logo: {
        alt: 'Pojavlauncher',
        src: 'img/pojavlauncher.svg',
      },
      items: [
        {
          href: 'https://github.com/PojavLauncherTeam/PojavLauncher',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: './docs/Installation/intro.md',
          label: 'Get Started',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/aenk3EUvER',
            },
            {
              label: 'X',
              href: 'https://x.com/PLaunchTeam',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/PojavLauncherTeam/PojavLauncher',
            },
          ],
        },
      ],
      copyright: `Powered by Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
