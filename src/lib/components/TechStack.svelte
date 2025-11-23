<script lang="ts">
import { Code2, Database, Layout } from "lucide-svelte";
import { Badge } from "$lib/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";

const techStack = {
	frontend: [
		"SvelteKit",
		"React",
		"Next.js",
		"Vue 3",
		"TypeScript",
		"Tailwind CSS",
		"Shadcn UI",
		"Qt/QML",
		"Flutter",
	],
	backend: ["Python", "Go", "C++17", "C#", ".NET Core", "Node.js", "PostgreSQL", "RESTful APIs"],
	data: [
		"PyTorch",
		"LSTM Networks",
		"NumPy",
		"Pandas",
		"TA-Lib",
		"Machine Learning",
		"Algorithmic Trading",
		"Data Analysis",
	],
};
</script>

<section
    id="tech"
    class="relative container mx-auto overflow-hidden py-24 md:py-32"
>
    <div
        class="mx-auto max-w-[980px] flex flex-col items-center gap-4 text-center mb-12"
    >
        <h2
            class="text-3xl font-bold leading-tight tracking-tighter md:text-4xl"
        >
            Tech Stack
        </h2>
        <p class="text-lg text-muted-foreground">
            Moderne Technologien für skalierbare und performante Lösungen.
        </p>
    </div>

    <div class="rounded-3xl border bg-muted/50 p-8 md:p-12">
        <div class="grid gap-6 md:grid-cols-3">
            <Card class="bg-background/60 backdrop-blur-sm">
                <CardHeader class="flex flex-row items-center gap-4 space-y-0">
                    <div class="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Layout
                            class="h-6 w-6 text-blue-600 dark:text-blue-400"
                        />
                    </div>
                    <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent class="flex flex-wrap gap-2">
                    {#each techStack.frontend as tech}
                        <Badge
                            variant="secondary"
                            class="flex items-center gap-2 px-3 py-1 text-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                        >
                            {tech}
                        </Badge>
                    {/each}
                </CardContent>
            </Card>

            <Card class="bg-background/60 backdrop-blur-sm">
                <CardHeader class="flex flex-row items-center gap-4 space-y-0">
                    <div
                        class="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg"
                    >
                        <Code2
                            class="h-6 w-6 text-green-600 dark:text-green-400"
                        />
                    </div>
                    <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent class="flex flex-wrap gap-2">
                    {#each techStack.backend as tech}
                        <Badge
                            variant="secondary"
                            class="flex items-center gap-2 px-3 py-1 text-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                        >
                            {tech}
                        </Badge>
                    {/each}
                </CardContent>
            </Card>

            <Card class="bg-background/60 backdrop-blur-sm">
                <CardHeader class="flex flex-row items-center gap-4 space-y-0">
                    <div
                        class="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg"
                    >
                        <Database
                            class="h-6 w-6 text-purple-600 dark:text-purple-400"
                        />
                    </div>
                    <CardTitle>Data & AI</CardTitle>
                </CardHeader>
                <CardContent class="flex flex-wrap gap-2">
                    {#each techStack.data as tech}
                        <Badge
                            variant="secondary"
                            class="flex items-center gap-2 px-3 py-1 text-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                        >
                            {tech}
                        </Badge>
                    {/each}
                </CardContent>
            </Card>
        </div>
    </div>
</section>
