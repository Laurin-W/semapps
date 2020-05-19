module.exports = {
  title: 'SemApps',
  tagline: 'Fostering interconnections between communities by creating synergies between their platforms'
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'assemblee-virtuelle', // Usually your GitHub org/user name.
  projectName: 'semapps', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SemApps',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      links: [
        {to: 'docs/governance/team', label: 'Gouvernance', position: 'left'},
        {to: 'docs/participate/style-guide', label: 'Participer', position: 'left'},
        {to: 'docs/tech/get-started', label: 'Documentation', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/assemblee-virtuelle/semapps',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Riot',
              href: 'https://riot.im/app/#/room/#semapps:matrix.virtual-assembly.org',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/assemblee-virtuelle/semapps',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Assemblée Virtuelle`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/assemblee-virtuelle/semapps/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
