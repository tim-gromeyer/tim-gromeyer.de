<script lang="ts">
import {
	Brain,
	Camera,
	FileCode,
	FileText,
	Headphones,
	Monitor,
	Sparkles,
	TrendingUp,
} from "lucide-svelte";
import ContactForm from "$lib/components/ContactForm.svelte";
import Hero from "$lib/components/Hero.svelte";
import ProjectCard from "$lib/components/ProjectCard.svelte";
import TechStack from "$lib/components/TechStack.svelte";

const projects = [
	{
		title: "Rechnungs-Ersteller",
		description:
			"Kostenloser ZUGFeRD-konformer E-Rechnungs-Generator. Erstelle professionelle Rechnungen direkt im Browser – ohne Anmeldung, DSGVO-konform.",
		tech: ["SvelteKit", "TypeScript", "Shadcn UI", "ZUGFeRD", "PDF Export"],
		link: "https://rechnung.tim-gromeyer.de/",
		github: "https://github.com/tim-gromeyer/rechnungs-ersteller",
		icon: FileText,
		gradient: "from-green-600 to-lime-600",
	},
	{
		title: "StockProfit",
		description:
			"Portfolio-Tracker für smartbroker+ mit CSV-Import. Analysiere Gewinne, Verluste und Performance-Metriken deines Depots.",
		tech: ["SvelteKit", "TypeScript", "Chart.js", "CSV Parser", "Shadcn UI"],
		link: "https://stockprofit.tim-gromeyer.de/",
		icon: TrendingUp,
		gradient: "from-blue-600 to-cyan-600",
	},
	{
		title: "QuantSeason",
		description:
			"Erkenne saisonale Muster in Aktienkursen durch quantitative Analyse. Datengetriebene Insights für bessere Trading-Entscheidungen.",
		tech: ["Go", "Next.js", "React", "Alpha Vantage API", "Algorithmic Trading"],
		link: "https://quant-season.tim-gromeyer.de/",
		icon: Brain,
		gradient: "from-indigo-600 to-purple-600",
	},
	{
		title: "Event-Galerie",
		description:
			"Online-Fotogalerie für Hochzeiten & Events. Gäste laden Fotos hoch, genießen Live-Diashows – DSGVO-konform und einfach per QR-Code.",
		tech: ["Next.js", "React", "PostgreSQL", "Image CDN", "WebSocket"],
		link: "https://event-galerie.tim-gromeyer.de/",
		icon: Camera,
		gradient: "from-cyan-600 to-teal-600",
	},
	{
		title: "Fotobox UI",
		description:
			"Touchscreen-optimierte Benutzeroberfläche für Event-Fotoboxen mit Kamera-Integration und Echtzeit-Vorschau.",
		tech: ["Vue 3", "Composition API", "Raspberry Pi", "Camera API"],
		link: "#",
		icon: Monitor,
		gradient: "from-sky-600 to-blue-600",
	},
	{
		title: "StockSense AI",
		description:
			"KI-gestütztes Trading-System mit neuronalen Netzwerken. Aktienkurs-Prognosen durch Deep Learning und technische Indikatoren.",
		tech: ["PyTorch", "LSTM Networks", "NumPy", "Pandas", "TA-Lib"],
		link: "#",
		icon: Sparkles,
		gradient: "from-purple-600 to-pink-600",
		badge: "In Entwicklung",
	},
	{
		title: "LibrePods",
		description:
			"AirPods-Features für Android & Linux. Noise Control, Ear Detection, Akkustand und Head Gestures – ohne Apple-Ökosystem.",
		tech: ["C++17", "Qt 6", "QML", "Bluetooth LE", "D-Bus"],
		link: "https://github.com/kavishdevar/librepods",
		icon: Headphones,
		gradient: "from-emerald-600 to-cyan-600",
	},
	{
		title: "html2md",
		description:
			"Schnelle C++ Library zur HTML-zu-Markdown-Konvertierung. Unterstützt Tabellen, Formatierungen und Python-Bindings.",
		tech: ["C++17", "CMake", "Python Bindings", "Markdown Parser"],
		link: "#",
		github: "https://github.com/tim-gromeyer/html2md",
		icon: FileCode,
		gradient: "from-blue-600 to-indigo-600",
	},
];
</script>

<svelte:head>
	<title>Tim Gromeyer - Full Stack Developer</title>
	<meta
		name="description"
		content="Portfolio von Tim Gromeyer - Full Stack Entwickler spezialisiert auf moderne Webtechnologien."
	/>
</svelte:head>

<Hero />

<section id="projects" class="w-full bg-muted/30 py-24 md:py-32">
	<div class="container mx-auto px-4">
		<div
			class="mx-auto max-w-[980px] flex flex-col items-center gap-4 text-center mb-12"
		>
			<h2
				class="text-3xl font-bold leading-tight tracking-tighter md:text-4xl"
			>
				Projekte
			</h2>
			<p class="text-lg text-muted-foreground">
				Eine Auswahl meiner aktuellen Arbeiten und Open-Source-Projekte.
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<ProjectCard {...project} />
			{/each}
		</div>
	</div>
</section>

<TechStack />

<ContactForm />
