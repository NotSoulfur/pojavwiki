import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
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
        },
        blog: {
          showReadingTime: true,
        },
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
