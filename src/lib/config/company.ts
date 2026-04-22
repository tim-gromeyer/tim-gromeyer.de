/**
 * Zentrale Firmendaten von Gromeyer IT.
 * Alle Seiten (Impressum, Datenschutz, Footer, JSON-LD) importieren
 * ausschließlich aus dieser Datei – niemals hardcoden!
 */
export const COMPANY = {
    name: 'Gromeyer IT',
    owner: 'Tim Gromeyer',
    street: 'Waldweg 13',
    city: '01326 Dresden',
    country: 'Deutschland',
    email: 'kontakt@gromeyer-it.de',
    website: 'https://gromeyer-it.de',
    /** Finanzamt Dresden-Nord, Steuernummer */
    taxId: '202/225/03346',
    /** Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG */
    ustId: 'DE455433907',
    /** Wirtschafts-Identifikationsnummer */
    wIdNr: 'DE455433907',
    /** Gewerbe-Anmeldedatum */
    founded: '2025',
    /** Cloudflare Web Analytics Token (PUBLIC_CF_ANALYTICS_TOKEN) */
    cfAnalyticsToken: ''
} as const;

/** Vollständige Anschrift für Impressum & strukturierte Daten */
export const FULL_ADDRESS = `${COMPANY.owner}\n${COMPANY.name}\n${COMPANY.street}\n${COMPANY.city}\n${COMPANY.country}`;
