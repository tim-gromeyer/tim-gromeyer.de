<script lang="ts">
	import {
		Camera,
		FileCode,
		FileText,
		Headphones,
		Monitor,
		Sparkles,
		TrendingUp,
		Bot,
		ShieldCheck,
	} from "lucide-svelte";
	import ContactForm from "$lib/components/ContactForm.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import TechStack from "$lib/components/TechStack.svelte";
	import { getPageMeta } from "$lib/config/seo";

	const pageMeta = getPageMeta({
		title: "Tim Gromeyer - Software-Architekt & Entwickler",
		description: "Portfolio von Tim Gromeyer - Gründer von Gromeyer IT",
		path: "/",
	});

	const projects = [
		{
			title: "Event Galerie",
			description:
				"Skalierbare SaaS-Plattform für Echtzeit-Fotosharing auf Events. Bietet Live-Diashows, QR-Code-Uploads und automatisiertes Billing via Stripe.",
			tech: [
				"Svelte 5",
				"Drizzle ORM (D1)",
				"Cloudflare R2",
				"Stripe",
				"Paraglide-JS",
			],
			link: "https://event.gromeyer-it.de/",
			icon: Camera,
			gradient: "from-primary to-blue-600",
			badge: "SaaS Live",
		},
		{
			title: "TradingBot AI",
			description:
				"Quantitatives Handelssystem für Smartbroker+. Implementiert LSTM-Netzwerke zur Marktprognose und bietet volle Kontrolle über API-Keys im Browser.",
			tech: [".NET 10", "Svelte 5", "TorchSharp", "Alpaca SDK"],
			link: "https://tradingbot.gromeyer-it.de/",
			icon: Bot,
			gradient: "from-blue-600 to-indigo-600",
			badge: "Beta",
		},
		{
			title: "ErinnerungsWerk (AI Fotobox)",
			description:
				"Hochperformantes Fotobox-System mit nativer Hardware-Anbindung und KI-gestützter Bildoptimierung (SCI/Zero-DCE) für Low-Light-Szenarien.",
			tech: ["C++20", "Qt 6 (QML)", "OpenVINO (Intel AI)", "libcamera"],
			link: "https://gromeyer-it.de/produkte",
			icon: Sparkles,
			gradient: "from-amber-600 to-orange-600",
			badge: "Hardware",
		},
		{
			title: "Rechnungs-Ersteller",
			description:
				"Cloud-Tool zur Erstellung GoBD-konformer E-Rechnungen (ZUGFeRD/XRechnung). Fokus auf Datenschutz und automatisierte PDF-Generierung.",
			tech: ["Svelte 5", "pdfmake", "XML-JS (ZUGFeRD)", "Zod"],
			link: "https://rechnung.tim-gromeyer.de/",
			icon: FileText,
			gradient: "from-green-600 to-emerald-600",
			badge: "Utility",
		},
		{
			title: "StockProfit",
			description:
				"Analyse-Dashboard für Smartbroker+ Depots. Visualisiert Portfolio-Metriken und steuerliche Gains durch robustes CSV-Parsing.",
			tech: ["Svelte 5", "LayerChart (D3)", "PapaParse", "Vercel Edge"],
			link: "https://stockprofit.tim-gromeyer.de/",
			icon: TrendingUp,
			gradient: "from-cyan-600 to-blue-600",
		},
		{
			title: "LibrePods",
			description:
				"Open-Source Treiber-Suite für AirPods unter Linux & Android. Implementiert Noise Control und Ear Detection via Bluetooth LE und D-Bus.",
			tech: ["C++20", "Qt 6", "BlueZ", "D-Bus"],
			github: "https://github.com/tim-gromeyer/librepods",
			icon: Headphones,
			gradient: "from-zinc-700 to-zinc-900",
		},
	];
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
	<meta name="description" content={pageMeta.description} />

	<!-- Open Graph Meta Tags -->
	<meta property="og:title" content={pageMeta.title} />
	<meta property="og:description" content={pageMeta.description} />
	<meta property="og:url" content={pageMeta.url} />
	<meta property="og:image" content={pageMeta.image} />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:title" content={pageMeta.title} />
	<meta name="twitter:description" content={pageMeta.description} />
	<meta name="twitter:image" content={pageMeta.image} />
</svelte:head>

<Hero />

<section id="projects" class="w-full bg-muted/30 py-24 md:py-40">
	<div class="container mx-auto px-6">
		<div
			class="mx-auto max-w-3xl flex flex-col items-center gap-6 text-center mb-20"
		>
			<div
				class="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase text-zinc-500"
			>
				Portfolio
			</div>
			<h2
				class="text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl"
			>
				Echte <span class="text-zinc-500">Lösungen.</span>
			</h2>
			<p class="text-xl text-muted-foreground font-medium max-w-xl">
				Vom Open-Source Treiber bis zur skalierten SaaS-Architektur. Ich
				baue Software, die einen Unterschied macht.
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<ProjectCard {...project} />
			{/each}
		</div>
	</div>
</section>

<TechStack />

<ContactForm />
