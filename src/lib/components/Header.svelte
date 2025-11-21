<script lang="ts">
import { Moon, Sun } from "lucide-svelte";
import { toggleMode } from "mode-watcher";
import { page } from "$app/stores";
import { Button } from "$lib/components/ui/button";

const navItems = [
	{ href: "/", label: "Start" },
	{ href: "#projects", label: "Projekte" },
	{ href: "#tech", label: "Tech Stack" },
	{ href: "#contact", label: "Kontakt" },
];
</script>

<header
    class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" class="mr-6 flex items-center space-x-2">
            <span class="hidden font-bold sm:inline-block">Tim Gromeyer</span>
            <span class="font-bold sm:hidden">TG</span>
        </a>

        <!-- Desktop Nav -->
        <nav
            class="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-6 text-base font-medium md:flex"
        >
            {#each navItems as item}
                <a
                    href={item.href}
                    class="transition-colors hover:text-foreground/80 text-foreground/60"
                    class:text-foreground={$page.url.hash === item.href}
                >
                    {item.label}
                </a>
            {/each}
        </nav>

        <div class="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onclick={toggleMode}>
                <Sun
                    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Moon
                    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>
    </div>
</header>
