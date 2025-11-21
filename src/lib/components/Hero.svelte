<script lang="ts">
import { Button } from "$lib/components/ui/button";
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
    <div class="container relative z-10 mx-auto px-4 text-center">
        <h1
            class="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up opacity-0"
            style="animation-delay: 0.1s; animation-fill-mode: forwards;"
        >
            Hi, ich bin <span class="text-primary">Tim Gromeyer</span>
        </h1>
        <p
            class="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up opacity-0"
            style="animation-delay: 0.3s; animation-fill-mode: forwards;"
        >
            Full Stack Entwickler spezialisiert auf moderne Webanwendungen mit
            Fokus auf Performance und User Experience.
        </p>
        <div
            class="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up opacity-0"
            style="animation-delay: 0.5s; animation-fill-mode: forwards;"
        >
            <Button size="lg" href="#projects">Projekte ansehen</Button>
            <Button size="lg" variant="outline" href="#contact"
                >Kontaktieren</Button
            >
        </div>
    </div>
</section>

<style>
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
</style>
