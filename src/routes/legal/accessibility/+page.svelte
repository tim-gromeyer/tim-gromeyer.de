<script lang="ts">
    import { COMPANY } from "$lib/config/company";
    import { getPageMeta } from "$lib/config/seo";

    const pageMeta = getPageMeta({
        title: "Erklärung zur Barrierefreiheit | Tim Gromeyer",
        description:
            "Informationen zur Barrierefreiheit der Website von Tim Gromeyer gemäß BFSG.",
        path: "/legal/accessibility",
    });
</script>

<svelte:head>
    <title>{pageMeta.title}</title>
    <meta name="description" content={pageMeta.description} />
</svelte:head>

<section class="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
    <h1 class="text-4xl font-bold mb-8">Erklärung zur Barrierefreiheit</h1>

    <div class="space-y-8 text-muted-foreground">
        <div>
            <p>
                Tim Gromeyer bemüht sich, seine Website im Einklang mit dem
                Barrierefreiheitsstärkungsgesetz (BFSG) barrierefrei zugänglich
                zu machen. Diese Erklärung zur Barrierefreiheit gilt für die
                Website <a
                    href={COMPANY.website}
                    class="underline underline-offset-4">{COMPANY.website}</a
                >.
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Stand der Vereinbarkeit mit den Anforderungen
            </h2>
            <p>
                Diese Website ist mit den Anforderungen der Web Content
                Accessibility Guidelines (WCAG) 2.2 Level AA größtenteils
                vereinbar.
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Nicht barrierefreie Inhalte
            </h2>
            <p>
                Die nachstehend aufgeführten Inhalte sind aus den folgenden
                Gründen nicht barrierefrei:
            </p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>
                    Einige interaktive Elemente könnten für Screenreader
                    optimiert werden (fortlaufender Prozess).
                </li>
                <li>
                    Bei komplexen Grafiken fehlen teilweise noch die
                    ausführlichen Textalternativen.
                </li>
            </ul>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Erstellung dieser Erklärung zur Barrierefreiheit
            </h2>
            <p>
                Diese Erklärung wurde am 22. April 2026 erstellt. Die Bewertung
                der Barrierefreiheit beruht auf einer Selbstbewertung.
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Feedback und Kontaktangaben
            </h2>
            <p>
                Wenn Ihnen Barrieren auf unserer Website auffallen oder Sie
                Informationen in einem barrierefreien Format benötigen, können
                Sie uns gerne kontaktieren:
            </p>
            <p class="mt-2">
                {COMPANY.owner}<br />
                E-Mail:
                <a
                    href="mailto:{COMPANY.email}"
                    class="underline underline-offset-4">{COMPANY.email}</a
                >
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Durchsetzungsverfahren
            </h2>
            <p>
                Sollten Sie nach Ihrer Kontaktaufnahme keine zufriedenstellende
                Antwort erhalten haben, können Sie sich an die zuständige
                Schlichtungsstelle wenden.
            </p>
        </div>
    </div>
</section>
