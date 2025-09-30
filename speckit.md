Crea un sito web completo per il progetto spirituale "Fedele Messaggero" 
da deployare su Cloudflare Workers con dominio puraluce.it.

REQUISITI TECNICI:
- Framework: Cloudflare Workers + Pages
- Stack: HTML, CSS, JavaScript vanilla (no framework pesanti)
- Design: Minimalista, elegante, mobile-first
- Performance: 100/100 Lighthouse score
- SEO: Ottimizzato per ricerca spiritualità cattolica italiana

STRUTTURA SITO:

1. HOME PAGE
   - Hero section con tagline: "Fuoco nel corpo · Presenza nel giorno · Regno nella carne"
   - Spiegazione breve del progetto Fedele Messaggero
   - CTA: "Ricevi la Pagina Sacra quotidiana"
   - Ultimi 3 post dal feed
   - Testimonianze community

2. PAGINE SACRE (archivio)
   - Lista paginata di tutte le Pagine Sacre pubblicate
   - Filtri per: data, tempo liturgico, santo del giorno
   - Ricerca full-text
   - Ogni pagina con URL tipo: /pagine-sacre/2025-09-30

3. PAGINA SACRA SINGOLA (template)
   - Layout fedele al formato originale
   - Sezioni: Vangelo, Rosario Interiore, Il Re oggi, Fuoco/Presenza/Regno, etc.
   - Pulsante "Stampa per quaderno A6"
   - Condivisione social
   - Commenti (opzionale via Disqus o sistema custom)

4. LECTIO ALCHEMICA (sezione)
   - Archivio approfondimenti alchemici
   - Design più contemplativo, background scuri
   - Tipografia più artistica

5. CHI SIAMO / PROGETTO
   - Storia del Fedele Messaggero
   - Metodologia: Fuoco/Presenza/Regno
   - Come usare le Pagine Sacre
   - FAQ

6. ISCRIVITI
   - Form email per newsletter quotidiana
   - Integrazione con servizio email (Mailchimp/SendGrid/Resend)
   - Privacy policy GDPR compliant

7. RISORSE
   - Download PDF: "Le Beatitudini secondo il Fedele Messaggero"
   - Template quaderno A6 stampabile
   - Wallpaper mobile con frasi chiave
   - Guida "Come iniziare il cammino"

DESIGN REQUIREMENTS:

Palette colori:
- Primario: #1a1a1a (nero profondo)
- Secondario: #f5f5f5 (bianco sporco)
- Accenti: #d4af37 (oro), #c41e3a (rosso sacro)
- Testo: #2c2c2c su chiaro, #e8e8e8 su scuro

Typography:
- Heading: 'Cormorant Garamond', serif
- Body: 'Inter', sans-serif
- Quotes: 'EB Garamond', serif, italic

Layout:
- Max-width contenuto: 720px
- Spacing armonioso (sistema 8px)
- Mobile-first responsive
- Animazioni subtle (fade-in, slide-up)

Elementi grafici:
- Croce ☩ come elemento decorativo ricorrente
- Icone: 🔥👁👣👑📿 integrate nel design
- Immagini: placeholder per foto contemplative

FUNZIONALITÀ AVANZATE:

1. PWA (Progressive Web App)
   - Installabile su mobile
   - Notifica push per Pagina Sacra quotidiana
   - Funzionamento offline base

2. Search
   - Ricerca full-text nelle Pagine Sacre
   - Suggerimenti durante digitazione
   - Ricerca per tema (perdono, beatitudini, etc.)

3. Calendario Liturgico
   - Vista calendario con Pagine Sacre
   - Colori liturgici
   - Link a santi del giorno

4. Modalità Lettura
   - Toggle per rimuovere distrazioni
   - Font size adjustable
   - Dark mode / Light mode

5. Stampa ottimizzata
   - CSS print per formato A6
   - Layout adattato per quaderno tascabile

CLOUDFLARE WORKERS SPECIFICS:

- Usa Cloudflare Pages per hosting statico
- Workers per:
  * API endpoint per form iscrizione
  * Caching intelligente delle pagine
  * Rate limiting su form
  * Analytics custom

- KV Storage per:
  * Archivio Pagine Sacre (JSON)
  * Cache temporanea ricerche
  * Contatore visite

- R2 (opzionale) per:
  * Storage PDF e risorse scaricabili
  * Immagini ad alta risoluzione

CONTENT MANAGEMENT:

- Sistema semplice per aggiungere nuove Pagine Sacre
- File JSON strutturati tipo:
  {
    "data": "2025-09-30",
    "giorno": "Martedì",
    "tempo_liturgico": "Tempo Ordinario - XXVI Settimana",
    "santo": "San Girolamo",
    "vangelo_ref": "Lc 9,51-56",
    "vangelo_testo": "...",
    "fuoco": "...",
    "presenza": "...",
    "regno": "...",
    // etc
  }

- Script per generare HTML da JSON
- Possibilità futuro CMS headless

SEO & PERFORMANCE:

- Meta tags ottimizzati per ogni pagina
- Open Graph per condivisione social
- Schema.org markup per contenuti religiosi
- Sitemap.xml generata automaticamente
- robots.txt configurato
- Lazy loading immagini
- Critical CSS inline
- Asset minificati e compressi

DEPLOYMENT:

- Setup completo Cloudflare Workers
- Configurazione DNS per puraluce.it
- SSL/TLS automatico
- CI/CD con GitHub Actions (opzionale)
- Staging environment

ACCESSIBILITÀ:

- WCAG 2.1 AA compliant
- Navigazione da tastiera
- Screen reader friendly
- Contrasti colori adeguati
- Alt text su tutte le immagini

Genera tutto il codice necessario, inclusi:
- wrangler.toml configurazione
- HTML templates
- CSS completo
- JavaScript per interattività
- Workers API endpoints
- Script deploy
- README con istruzioni setup