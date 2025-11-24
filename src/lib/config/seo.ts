/**
 * SEO Configuration
 * Centralized configuration for meta tags and structured data
 */

export const siteConfig = {
	name: "Tim Gromeyer - Full Stack Developer",
	url: "https://www.tim-gromeyer.de",
	description:
		"Portfolio von Tim Gromeyer - Full Stack Entwickler spezialisiert auf moderne Webtechnologien, SvelteKit, TypeScript und Web-Anwendungen.",
	keywords: [
		"Full Stack Developer",
		"Web Development",
		"SvelteKit",
		"TypeScript",
		"Portfolio",
		"Software Engineer",
		"React",
		"Next.js",
		"Vue",
		"Go",
		"Python",
		"C++",
	],
	author: {
		name: "Tim Gromeyer",
		email: "tim@gromeyer.de",
		url: "https://www.tim-gromeyer.de",
		jobTitle: "Full Stack Developer",
		description:
			"Full Stack Entwickler mit Expertise in modernen Webtechnologien, spezialisiert auf SvelteKit, TypeScript, React und Backend-Entwicklung.",
	},
	social: {
		github: "https://github.com/tim-gromeyer",
		instagram: "https://www.instagram.com/tim.gromeyer",
		linkedin: "https://www.linkedin.com/in/tim-g-46a283335/",
	},
	ogImage: "/og-image.png",
	locale: "de_DE",
	type: "website",
};

/**
 * Generate JSON-LD Person schema
 */
export function getPersonSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: siteConfig.author.name,
		jobTitle: siteConfig.author.jobTitle,
		description: siteConfig.author.description,
		url: siteConfig.author.url,
		email: siteConfig.author.email,
		sameAs: [siteConfig.social.github, siteConfig.social.instagram, siteConfig.social.linkedin],
		knowsAbout: siteConfig.keywords,
	};
}

/**
 * Generate JSON-LD WebSite schema
 */
export function getWebSiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: siteConfig.name,
		url: siteConfig.url,
		description: siteConfig.description,
		author: {
			"@type": "Person",
			name: siteConfig.author.name,
		},
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	};
}

/**
 * Get meta tags for a specific page
 */
export function getPageMeta(options: {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
}) {
	const title = options.title || siteConfig.name;
	const description = options.description || siteConfig.description;
	const url = options.path ? `${siteConfig.url}${options.path}` : siteConfig.url;
	const image = options.image || `${siteConfig.url}${siteConfig.ogImage}`;

	return {
		title,
		description,
		url,
		image,
		keywords: siteConfig.keywords.join(", "),
	};
}
