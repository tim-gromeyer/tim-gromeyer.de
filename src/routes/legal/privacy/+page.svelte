<script lang="ts">
    import { COMPANY } from "$lib/config/company";
    import { getPageMeta } from "$lib/config/seo";

    const pageMeta = getPageMeta({
        title: "Datenschutzerklärung | Gromeyer IT",
        description:
            "Datenschutzerklärung von Gromeyer IT - Informationen zum Schutz Ihrer persönlichen Daten.",
        path: "/legal/privacy",
    });
</script>

<svelte:head>
    <title>{pageMeta.title}</title>
    <meta name="description" content={pageMeta.description} />
</svelte:head>

<section class="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
    <h1 class="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

    <div class="space-y-8 text-muted-foreground prose prose-invert">
        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                1. Datenschutz auf einen Blick
            </h2>
            <h3 class="text-lg font-medium text-foreground mb-1">
                Allgemeine Hinweise
            </h3>
            <p>
                Diese Website verwendet keine Cookies, die eine Einwilligung
                erfordern. Wir setzen lediglich technisch notwendige
                Session-Cookies oder vergleichbare Technologien ein, um die
                Sicherheit der Formularübermittlung (CSRF-Schutz) und Ihre
                Design-Einstellungen (Dark Mode) zu gewährleisten.
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                2. Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
            </h2>
            <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber:
            </p>
            <address class="not-italic">
                {COMPANY.owner}<br />
                {COMPANY.name}<br />
                {COMPANY.street}<br />
                {COMPANY.city}<br />
                E-Mail: {COMPANY.email}
            </address>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                3. Datenerfassung auf dieser Website
            </h2>
            <h3 class="text-lg font-medium text-foreground mb-1">
                Kontaktformular
            </h3>
            <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
            </p>
            <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                4. Plugins und Tools
            </h2>
            <h3 class="text-lg font-medium text-foreground mb-1">
                Cloudflare Turnstile
            </h3>
            <p>
                Wir nutzen Cloudflare Turnstile zur Spam-Vermeidung in unseren
                Formularen. Hierbei werden keine Cookies im klassischen Sinne
                gespeichert, jedoch werden Browser-Daten an Cloudflare
                übertragen, um sicherzustellen, dass die Anfrage von einem
                Menschen stammt.
            </p>

            <h3 class="text-lg font-medium text-foreground mb-1">
                Vercel / Cloudflare Hosting
            </h3>
            <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters gespeichert. Hierbei kann es sich v. a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Webseitenzugriffe und sonstige Daten, die über eine Website
                generiert werden, handeln.
            </p>
        </div>

        <div>
            <h2 class="text-xl font-semibold text-foreground mb-2">
                5. Ihre Rechte
            </h2>
            <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
            </p>
        </div>
    </div>
</section>
