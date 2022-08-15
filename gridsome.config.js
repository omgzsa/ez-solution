module.exports = {
  siteName: 'EZ Solutions',
  siteUrl: process.env.SITE_URL || 'https://www.ezsolutions.hu',
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
        contentSecurityPolicy: {
          'font-src': ['fonts.google.com'],
        },
        customHeaders: {
          'X-Content-Type-Options': 'nosniff',
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
