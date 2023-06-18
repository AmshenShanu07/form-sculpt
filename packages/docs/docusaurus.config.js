/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Form Sculpt',
  tagline: 'Create Beautiful forms with json data',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://amshenshanu07.github.io',
  organizationName: 'AmshenShanu07', // Usually your GitHub org/user name.
  projectName: 'form-sculpt', // Usually your repo name.
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  baseUrl: '/form-sculpt/docs',
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
          routeBasePath:'/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Form Sculpt',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introduction',
            to:'/Introduction/overview'
          },
          {
            href: 'https://github.com/AmshenShanu07/form-sculpt',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/Intoduction/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/AmshenShanu07/form-sculpt',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Form Sculpt, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      onBrokenLinks: 'ignore',
      url:'https://github.com/AmshenShanu07/form-sculpt',
      
    }),
};

module.exports = config;
