// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GRP',
  tagline: 'LUA guru',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://brinyiczki.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'brinyiczki', // Usually your GitHub org/user name.
  projectName: 'brinyiczki.github.io', // Usually your repo name.
  deploymentBranch: "deployment",
  trailingSlash: false,

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/profile3.png',
      },
      items: [
        {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
         // {
        //    to: '/blog',
         //   label: 'Blog',
         //   position: 'left',
         // },
         {
          href: 'https://discord.com/users/666230610507071490',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/brinyiczki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },


   /* footer: {
      /* style:'', */
    /*  links: [
        {
          //title: 'Roblox',
          items: [
            {
              label: 'Roblox',
              href: 'https://create.roblox.com/talent/creators/3195667595',
            },
          ],
        },
        {
         // title: 'Discord',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/users/666230610507071490',
            },
          ],
        },
        {
         // title: 'More',
         
          items: [
            {
              label: 'Paypal',
              href: 'https://paypal.me/brinyiczki',
            },
          ],
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} GripAll, Built with Docusaurus.`,
     
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,

    },
         
  },
      */

   },
};

export default config;
