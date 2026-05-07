<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Terminal } from "lucide-svelte";
</script>

<section
    id="home"
    class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20"
>
    <div class="absolute inset-0 -z-10 h-full w-full bg-background">
        <div
            class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]"
        ></div>
    </div>
    <div
        class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
    ></div>
    <div class="container relative z-10 mx-auto px-6 text-center">
        <div
            class="mb-8 flex justify-center animate-fade-in-up opacity-0"
            style="animation-delay: 0.1s; animation-fill-mode: forwards;"
        >
            <div
                class="flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-xs font-bold tracking-widest uppercase text-foreground backdrop-blur-md"
            >
                <Terminal size={14} class="text-primary" />
                Gründer von Gromeyer IT
            </div>
        </div>
        <h1
            class="mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl animate-fade-in-up opacity-0"
            style="animation-delay: 0.2s; animation-fill-mode: forwards;"
        >
            Tim <span class="text-zinc-500">Gromeyer</span>
        </h1>
        <p
            class="mx-auto mb-12 max-w-2xl text-xl text-muted-foreground sm:text-2xl animate-fade-in-up opacity-0 font-medium leading-relaxed"
            style="animation-delay: 0.4s; animation-fill-mode: forwards;"
        >
            Software-Architekt & Produkt-Entwickler. Ich entwerfe und skaliere
            digitale Lösungen von der ersten Zeile Code bis zum fertigen
            Produkt.
        </p>
        <div
            class="flex flex-col items-center justify-center gap-6 sm:flex-row animate-fade-in-up opacity-0"
            style="animation-delay: 0.6s; animation-fill-mode: forwards;"
        >
            <Button
                size="lg"
                href="#projects"
                class="h-16 px-12 rounded-full text-lg font-bold"
                >Projekte ansehen</Button
            >
            <Button
                size="lg"
                variant="outline"
                href="#contact"
                class="h-16 px-12 rounded-full text-lg font-bold"
                >Kontaktieren</Button
            >
        </div>
    </div>
</section>

<style>
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
</style>
