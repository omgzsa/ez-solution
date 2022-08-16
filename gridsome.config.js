module.exports = {
  siteName: 'EZ Solutions',
  siteUrl: process.env.SITE_URL || 'https://ezsolutions.hu',
  siteDescription:
    'A megújuló energiák szakértője. Napelem, elektromos tötő, hőszivattyú.',
  icon: './src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: 'gridsome-plugin-htaccess',
      options: {
        host: 'https://ezsolutions.hu',
        sitemap: 'https://ezsolutions.hu/sitemap.xml',
        contentSecurityPolicy: {
          'font-src': ['fonts.google.com'],
        },
      },
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://www.ezsolutions.hu',
        sitemap: 'https://www.ezsolutions.hu/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
  ],
};
