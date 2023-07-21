<<<<<<< HEAD
module.exports = {
  siteName: 'EZ Solutions',
  // publicPath: '/public/',
  siteUrl:
    process.env.SITE_URL ||
    'https://ezsolutions.hu' ||
    'https://www.ezsolutions.hu',
  siteDescription:
    'A megújuló energiák szakértője. Napelem, elektromos tötő, hőszivattyú.',
  icon: './src/favicon.png',
  css: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  loaderOptions: {
    scss: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: 'gridsome-plugin-htaccess',
      options: {
        host: 'https://ezsolutions.hu',
        sitemap:
          'https://ezsolutions.hu/sitemap.xml' ||
          'https://www.ezsolutions.hu/sitemap.xml',
      },
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://ezsolutions.hu',
        sitemap:
          'https://ezsolutions.hu/sitemap.xml' ||
          'https://www.ezsolutions.hu/sitemap.xml',
      },
    },
  ],
};
=======
module.exports = {
  siteName: 'EZ Solutions',
  // publicPath: '/public/',
  siteUrl:
    process.env.SITE_URL ||
    'https://ezsolutions.hu' ||
    'https://www.ezsolutions.hu',
  siteDescription:
    'A megújuló energiák szakértője. Napelem, elektromos tötő, hőszivattyú.',
  icon: './src/favicon.png',
  css: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  loaderOptions: {
    scss: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: 'gridsome-plugin-htaccess',
      options: {
        host: 'https://ezsolutions.hu',
        sitemap:
          'https://ezsolutions.hu/sitemap.xml' ||
          'https://www.ezsolutions.hu/sitemap.xml',
      },
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://ezsolutions.hu',
        sitemap:
          'https://ezsolutions.hu/sitemap.xml' ||
          'https://www.ezsolutions.hu/sitemap.xml',
      },
    },
  ],
};
>>>>>>> parent of 2459f0c (fb script)
