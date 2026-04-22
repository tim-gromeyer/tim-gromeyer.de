<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import {
		siteConfig,
		getPersonSchema,
		getWebSiteSchema,
	} from "$lib/config/seo";

	const personSchema = getPersonSchema();
	const websiteSchema = getWebSiteSchema();
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="author" content={siteConfig.author.name} />
	<meta name="keywords" content={siteConfig.keywords.join(", ")} />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="German" />

	<!-- Canonical URL -->
	<link rel="canonical" href={siteConfig.url} />

	<!-- Open Graph Meta Tags -->
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:type" content={siteConfig.type} />
	<meta property="og:locale" content={siteConfig.locale} />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@tim_gromeyer" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}

	<!-- Cloudflare Turnstile -->
	<script
		src="https://challenges.cloudflare.com/turnstile/v0/api.js"
		async
		defer
	></script>
</svelte:head>

<ModeWatcher />

<div class="relative flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
