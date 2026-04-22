<script lang="ts">
    import { COMPANY } from "$lib/config/company";
    import { getPageMeta } from "$lib/config/seo";

    const pageMeta = getPageMeta({
        title: "Impressum | Gromeyer IT",
        description:
            "Impressum von Gromeyer IT - Gesetzliche Angaben gemäß DDG.",
        path: "/legal/impressum",
    });
</script>

<svelte:head>
    <title>{pageMeta.title}</title>
    <meta name="description" content={pageMeta.description} />
</svelte:head>

<section class="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
    <h1 class="text-4xl font-bold mb-8">Impressum</h1>

    <div class="space-y-8 text-muted-foreground">
        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Angaben gemäß § 5 DDG
            </h2>
            <p>{COMPANY.owner}</p>
            <p>{COMPANY.name}</p>
            <p>{COMPANY.street}</p>
            <p>{COMPANY.city}</p>
            <p>{COMPANY.country}</p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">Kontakt</h2>
            <p>
                E-Mail: <a
                    href="mailto:{COMPANY.email}"
                    class="underline underline-offset-4">{COMPANY.email}</a
                >
            </p>
            <p>
                Website: <a
                    href={COMPANY.website}
                    target="_blank"
                    rel="noopener"
                    class="underline underline-offset-4">{COMPANY.website}</a
                >
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:<br />
                {COMPANY.ustId}
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Steuernummer
            </h2>
            <p>{COMPANY.taxId}</p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Wirtschafts-Identifikationsnummer
            </h2>
            <p>{COMPANY.wIdNr}</p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
                {COMPANY.owner}<br />
                {COMPANY.street}<br />
                {COMPANY.city}
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                EU-Streitschlichtung
            </h2>
            <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit: <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline underline-offset-4"
                    >https://ec.europa.eu/consumers/odr/</a
                >.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>
    </div>
</section>
