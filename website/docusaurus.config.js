/* eslint-disable no-undef */
module.exports = {
  title: 'runty',
  tagline: 'Extensible conditional string micro templates',
  url: 'https://nderscore.github.io',
  baseUrl: '/runty/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'nderscore',
  projectName: 'runty',
  themeConfig: {
    navbar: {
      title: 'runty',
      logo: {
        alt: 'runty logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'demo',
          label: 'Demo',
          position: 'left',
        },
        {
          href: 'https://github.com/nderscore/runty',
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
              label: 'API Reference',
              to: 'docs/api',
            },
            {
              label: 'Standard Library (fns)',
              to: 'docs/fns',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/runty',
            },
            {
              label: 'IRC (#runty on freenode)',
              href: 'https://mibbit.com/?server=chat.freenode.net:6697&channel=%23runty',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nderscore/runty',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} _nderscore. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nderscore/runty/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
