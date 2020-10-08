module.exports = {
  title: 'Incremental Game Template',
  tagline: 'A collection of useful scripts to help you develop incremental games!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: '123ishaTest', // Usually your GitHub org/user name.
  projectName: 'Incremental Game Template', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Incremental Game Template',
      logo: {
        alt: 'Incremental Game Template',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Ishadijcks/vue-incremental-game-template',
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
              label: 'Introduction',
              to: 'docs/',
            },

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/isha',
            },

          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Ishadijcks/vue-incremental-game-template',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 123ishaTest`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
