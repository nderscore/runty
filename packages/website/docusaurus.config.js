/* eslint-disable no-undef */
module.exports = {
  title: 'runty',
  tagline: 'Extensible conditional string micro templates',
  url: 'https://runty.js.org',
  baseUrl: '/',
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
          to: 'demo/',
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
              label: 'Template syntax',
              to: 'docs/syntax',
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
              label: 'GitHub',
              href: 'https://github.com/nderscore/runty',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} _nderscore. Built with Docusaurus.`,
    },
    // FIXME: need new algolia credentials
    // algolia: {
    //   apiKey: '34f3cc411eb2a349c0d88159c7bf7caf',
    //   indexName: 'runty_js',
    //   searchParameters: {},
    // },
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
        googleAnalytics: {
          trackingID: 'UA-179582829-1',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
