const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Develop Site',
  tagline: 'Solidity Are Cool',
  url: 'https://rooct.github.io',
  baseUrl: '/rooctblog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rooct', // Usually your GitHub org/user name.
  projectName: 'rooctblog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        // dapp: {
        //   sidebarPath: require.resolve('./sidebarsdapp.js'),
        //   // Please change this to your repo.
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    'docusaurus-tailwindcss'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dev Site',
        logo: {
          alt: 'Dev Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Solidity',
          },
          {
            type: 'doc',
            docId: 'evm',
            position: 'left',
            label: 'EVM',
          },
          {
            type: 'doc',
            docId: 'dapp',
            position: 'left',
            label: 'Dapps',
          },
          {
            type: 'doc',
            docId: 'devtool',
            position: 'left',
            label: 'DevTools',
          },
          // {
          //   to: "docs/intro",
          //   activeBasePath: "docs",
          //   label: "Solidity",
          //   position: "left",
          // },
          // {
          //   to: "frontend/intro",
          //   activeBasePath: "frontend",
          //   label: "Frontend",
          //   position: "left",
          // },
          // {
          //   href: 'https://hardhat.org/getting-started',
          //   label: 'Hardhat',
          //   position: 'left',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Solidity',
            items: [
              {
                label: 'HelloWorld',
                to: '/docs/solidity/example/Helloworld',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: '/',
              }
            ],
          },
          {
            title: 'Feature',
            items: [
              {
                label: 'Feature',
                href: '/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: '/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dev site, Inc. Built with dev.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
