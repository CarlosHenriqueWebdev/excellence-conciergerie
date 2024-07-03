module.exports = {
	siteUrl: "https://excellence-conciergerie.com",
	generateRobotsTxt: true,
	sitemapSize: 7000,
	outDir: "./public",

	robotsTxtOptions: {
		additionalSitemaps: ["https://excellence-conciergerie.com/sitemap.xml"],
	},

	i18n: {
		locales: ["en", "fr", "es", "pt"],
		defaultLocale: "en",
		localesPath: "/",
		exclude: [],
		pages: {
			"*": ["en", "fr", "es", "pt"],
		},
	},
};
