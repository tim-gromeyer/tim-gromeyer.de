<script lang="ts">
import { ExternalLink, Github } from "lucide-svelte";
import type { ComponentType } from "svelte";
import { Badge } from "$lib/components/ui/badge";
import { Button } from "$lib/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "$lib/components/ui/card";

export let title: string;
export let description: string;
export let tech: string[];
export let link: string;
export let github: string | undefined = undefined;
export let icon: ComponentType;
export let gradient: string;
export let badge: string | undefined = undefined;
</script>

<Card
    class="relative flex flex-col border-muted/40 transition-all hover:border-primary/40 hover:shadow-lg"
>
    <div
        class="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-br {gradient} opacity-10 transition-opacity group-hover:opacity-20"
    ></div>
    <CardHeader class="relative overflow-hidden pb-9">
        <div class="flex items-center justify-between">
            <div
                class="rounded-lg bg-background/50 p-2 backdrop-blur-sm ring-1 ring-border/50"
            >
                <svelte:component this={icon} class="h-6 w-6 text-foreground" />
            </div>
            {#if badge}
                <Badge
                    variant="secondary"
                    class="bg-background/50 backdrop-blur-sm">{badge}</Badge
                >
            {/if}
        </div>
        <CardTitle class="mt-4 text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent class="flex-1">
        <CardDescription class="mb-4 text-base">
            {description}
        </CardDescription>
        <div class="flex flex-wrap gap-2">
            {#each tech as t}
                <Badge variant="outline" class="bg-background/50">{t}</Badge>
            {/each}
        </div>
    </CardContent>
    <CardFooter class="flex gap-2 pt-4">
        {#if link && link !== "#"}
            <!-- Regular link exists: show "Besuchen" button -->
            <Button
                variant="default"
                size="sm"
                class="flex-1"
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <ExternalLink class="mr-2 h-4 w-4" />
                Besuchen
            </Button>

            <!-- Show small GitHub icon button if github link also exists -->
            {#if github}
                <Button
                    variant="outline"
                    size="icon"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github class="h-4 w-4" />
                    <span class="sr-only">GitHub</span>
                </Button>
            {/if}
        {:else if github}
            <!-- No regular link, but GitHub exists: show full-width GitHub button -->
            <Button
                variant="default"
                size="sm"
                class="flex-1"
                href={github}
                target="_blank"
                rel="noreferrer"
            >
                <Github class="mr-2 h-4 w-4" />
                GitHub
            </Button>
        {:else}
            <!-- No links at all: show "Demnächst" (Coming Soon) -->
            <Button variant="secondary" size="sm" class="flex-1" disabled>
                Demnächst
            </Button>
        {/if}
    </CardFooter>
</Card>
