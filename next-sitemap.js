module.exports = {
  siteUrl: 'https://trachieuthuonggia.vn/',
  generateRobotsTxt: true,
  sitemapSize: 1000,
  exclude: ['/server-sitemap.xml', '/ho-so', '/ho-so/*', '/admin', '/admin/*'], // <= exclude here
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/ho-so', '/admin'],
      },
    ],
    additionalSitemaps: [
      'https://trachieuthuonggia.vn/server-sitemap.xml', // <==== Add here
    ],
  },
  // optional
  //robotsTxtOptions: {
  //  additionalSitemaps: [
  //    'https://example.com/my-custom-sitemap-1.xml',
  //    'https://example.com/my-custom-sitemap-2.xml',
  //    'https://example.com/my-custom-sitemap-3.xml',
  //  ],
  //},
};