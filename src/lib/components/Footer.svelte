<script lang="ts">
    import { COMPANY } from "$lib/config/company";
    const _currentYear = new Date().getFullYear();
</script>

<footer class="border-t py-6 md:py-0">
    <div
        class="container mx-auto flex flex-col items-center justify-center gap-4 md:h-32"
    >
        <p class="text-center text-sm leading-loose text-muted-foreground">
            &copy; {_currentYear}
            {COMPANY.owner}. Alle Rechte vorbehalten.
        </p>
        <div
            class="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
            <a
                href="/legal/impressum"
                class="hover:text-foreground transition-colors">Impressum</a
            >
            <span class="text-muted-foreground/30">•</span>
            <a
                href="/legal/privacy"
                class="hover:text-foreground transition-colors">Datenschutz</a
            >
            <span class="text-muted-foreground/30">•</span>
            <a
                href="/legal/accessibility"
                class="hover:text-foreground transition-colors"
                >Barrierefreiheit</a
            >
            <span class="text-muted-foreground/30">•</span>
            <a
                href="https://github.com/tim-gromeyer"
                target="_blank"
                rel="noreferrer"
                class="font-medium underline underline-offset-4">GitHub</a
            >
        </div>
    </div>
</footer>
