/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'http://localhost:3000/',
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://xxxxxxx/server-sitemap.xml'],
    },
}

module.exports = config