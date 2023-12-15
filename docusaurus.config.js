// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neurai Docs',
  tagline: 'Documents for Neurai',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.neurai.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'neurai-community', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: "docs",
          routeBasePath: "/",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/neurai-social-card.jpg',
      navbar: {
        title: 'Neurai Docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://neurai.org',
            label: 'Neurai.org',
            position: 'right',
          },
          {
            href: 'https://neuraiexplorer.com',
            label: 'Explorer',
            position: 'right',
          },
          {
            href: 'https://github.com/neurai-community',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Courses',
            items: [
              {
                label: 'ESP32',
                to: '/',
              },
              {
                label: 'AI',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/neuraiproject',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/neuraiproject',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/dxJSrSeXjF',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/neuraiproject',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/NeuraiProject',
              },
              {
                label: 'GitHub Community',
                href: 'https://github.com/neurai-community',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neurai Docs`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
