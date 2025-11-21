<script lang="ts">
import { Brain, Camera, Code, Monitor, Sparkles, TrendingUp } from "lucide-svelte";
import ContactForm from "$lib/components/ContactForm.svelte";
import Hero from "$lib/components/Hero.svelte";
import ProjectCard from "$lib/components/ProjectCard.svelte";
import TechStack from "$lib/components/TechStack.svelte";

const projects = [
	{
		title: "Rechnungs-Ersteller",
		description:
			"Eine anpassbare Open-Source-Anwendung zur schnellen und einfachen Erstellung von Rechnungen.",
		tech: ["Svelte", "SvelteKit", "TypeScript", "Tailwind CSS"],
		link: "https://rechnung.tim-gromeyer.de/",
		github: "https://github.com/tim-gromeyer/rechnungs-ersteller",
		icon: Code,
		gradient: "from-green-600 to-lime-600",
	},
	{
		title: "StockProfit",
		description:
			"Portfolio-Tracking für smartbroker+ Nutzer mit vollständiger Analyse und Performance-Metriken.",
		tech: ["Next.js", "React", "TypeScript", "rechart"],
		link: "https://stockprofit.tim-gromeyer.de/",
		icon: TrendingUp,
		gradient: "from-blue-600 to-cyan-600",
	},
	{
		title: "QuantSeason",
		description:
			"Analyse-Tool zur Erkennung saisonaler Muster in Aktienkursen durch algorithmusbasierte Analyse.",
		tech: ["Go", "Next.js", "React", "Alpha Vantage API"],
		link: "https://quant-season.tim-gromeyer.de/",
		icon: Brain,
		gradient: "from-indigo-600 to-purple-600",
	},
	{
		title: "Event-Galerie",
		description:
			"Moderne Webseite zum Hochladen von Fotos auf Events mit Live-Slideshow-Funktion.",
		tech: ["Next.js", "React", "Image Optimization", "Datenbank"],
		link: "https://event-galerie.tim-gromeyer.de/",
		icon: Camera,
		gradient: "from-cyan-600 to-teal-600",
	},
	{
		title: "Fotobox UI",
		description:
			"Touchscreen-optimierte Benutzeroberfläche für Event-Fotobox mit Hardware-Integration.",
		tech: ["Vue", "UI/UX Design", "Hardware Integration"],
		link: "#",
		icon: Monitor,
		gradient: "from-sky-600 to-blue-600",
	},
	{
		title: "StockSense AI",
		description:
			"Machine Learning-System zur Analyse und Prognose von Aktienkursen mit fortgeschrittenen neuronalen Netzwerken.",
		tech: ["Python", "PyTorch", "NumPy", "Pandas", "TA-Lib"],
		link: "#",
		icon: Sparkles,
		gradient: "from-purple-600 to-pink-600",
		badge: "In Entwicklung",
	},
	{
		title: "LibrePods",
		description:
			"Open-Source Tool für AirPods-Features auf Android und Linux mit Bluetooth-Integration.",
		tech: ["C++", "Qt", "QtQuick", "QML", "Bluetooth"],
		link: "https://github.com/kavishdevar/librepods",
		icon: Code,
		gradient: "from-emerald-600 to-cyan-600",
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
