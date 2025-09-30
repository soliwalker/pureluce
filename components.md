PROMPT 1: Hero Section Animata
Crea una hero section per puraluce.it con:
- Background gradient animato (nero → oro scuro)
- Testo "Fedele Messaggero" che appare lettera per lettera
- Sottotitolo "Fuoco nel corpo · Presenza nel giorno · Regno nella carne" con fade-in sequenziale
- Particelle dorate che fluttuano sullo sfondo (canvas animation)
- CTA button con hover effect elegante
- 100% responsive, performance-first
- CSS vanilla (no librerie)

PROMPT 2: Sistema di Ricerca
Implementa un sistema di ricerca full-text per Pagine Sacre con:
- Input con debounce (300ms)
- Ricerca in: titolo, vangelo, fuoco, presenza, regno, frase diario
- Risultati live mentre digiti
- Highlight dei termini trovati
- Filtri aggiuntivi: data, tempo liturgico, santo
- Paginazione risultati (10 per pagina)
- Cache risultati frequenti in Cloudflare KV
- Fallback se JS disabilitato

PROMPT 3: Template Pagina Sacra Stampabile
Crea template HTML+CSS per Pagina Sacra formato A6 stampabile:
- Dimensioni: 105 x 148 mm
- Layout ottimizzato per stampa
- Font leggibili anche in piccolo
- Spazio per annotazioni marginali
- Header con data e santo
- Footer con logo "Fedele Messaggero"
- Media query @print dedicata
- Opzione stampa fronte-retro
- Preview prima di stampare

PROMPT 4: Form Iscrizione Newsletter
Crea form iscrizione newsletter con Cloudflare Worker backend:
- Frontend: HTML form accessibile + validazione JS
- Backend Worker: 
  * Validazione email
  * Rate limiting (max 5 tentativi/ora per IP)
  * Integrazione API Resend.com per invio email
  * Storage email in Cloudflare KV
  * Double opt-in flow
  * GDPR compliant
  * Response JSON
- Success/error states con animazioni
- Honeypot anti-spam

PROMPT 5: Calendario Liturgico Interattivo
Crea calendario liturgico per puraluce.it:
- Vista mese corrente
- Celle colorate per tempo liturgico (verde, viola, bianco, rosso)
- Hover mostra santo del giorno
- Click su data apre Pagina Sacra corrispondente
- Navigazione mesi precedenti/successivi
- Evidenzia domeniche
- Responsive: lista su mobile, grid su desktop
- Dati da file JSON statico

📦 PROMPT PER CONFIGURAZIONE CLOUDFLARE
PROMPT 6: Wrangler Setup
Genera configurazione completa Cloudflare Workers per puraluce.it:

1. wrangler.toml con:
   - name = "puraluce-fedele-messaggero"
   - compatibility_date
   - workers_dev = false
   - route = "puraluce.it/*"
   - KV namespaces: PAGINE_SACRE, EMAIL_SUBS, CACHE
   - Variables necessarie

2. workers/api.js con endpoints:
   - POST /api/subscribe (newsletter)
   - GET /api/pagine-sacre/:data
   - GET /api/search?q=
   - GET /api/calendario/:mese

3. Script deploy.sh per:
   - Build assets
   - Upload a Pages
   - Deploy Workers
   - Invalidate cache

4. .env.example con variabili necessarie

5. README con setup step-by-step
PROMPT 7: DNS & SSL Setup
Genera documentazione completa per configurare puraluce.it su Cloudflare:
- Passaggi trasferimento DNS
- Record necessari (A, AAAA, CNAME)
- Configurazione SSL/TLS Full (strict)
- Page Rules per ottimizzazioni
- Firewall rules base
- Cache rules per asset statici
- Redirect www → non-www
- Checklist verifiche post-setup

🎨 PROMPT PER DESIGN SYSTEM
PROMPT 8: Design System Completo
Crea design system CSS per puraluce.it chiamato "luce.css":

Variabili CSS custom per:
- Colori: primari, secondari, accenti, sfumature
- Typography: scale armonica (1.25 ratio)
- Spacing: sistema 8px (0.5rem base)
- Breakpoints: mobile, tablet, desktop
- Shadows: 5 livelli profondità
- Transitions: durate standard

Componenti atomici:
- Buttons (primary, secondary, ghost)
- Cards (standard, elevated, flat)
- Typography (h1-h6, p, blockquote, small)
- Forms (input, textarea, select, checkbox)
- Icons wrappers
- Badges/Tags
- Loading states
- Modals/Dialogs

Utilities classes:
- Margin/Padding (m-*, p-*)
- Display (flex, grid helpers)
- Text alignment
- Colors (text, bg)

Dark mode support con prefers-color-scheme

🚀 PROMPT PER FEATURES AVANZATE
PROMPT 9: PWA Configuration
Trasforma puraluce.it in PWA installabile:
- manifest.json completo
- Service Worker per:
  * Cache-first strategy per asset statici
  * Network-first per Pagine Sacre
  * Offline fallback page
  * Background sync per form
- Icone app (tutti i formati iOS/Android)
- Meta tags per installazione
- Prompt installazione personalizzato
- Push notifications setup (backend)
PROMPT 10: Analytics Privacy-First
Implementa analytics privacy-first per puraluce.it:
- Cloudflare Web Analytics integration
- Custom events tracking:
  * Pagina Sacra letta
  * Risorsa scaricata
  * Form iscrizione completato
  * Ricerca effettuata
- Dashboard semplice in /admin
- No cookies, no tracking personale
- GDPR compliant by design
- Real-time stats in Worker KV

📱 PROMPT PER MOBILE OPTIMIZATION
PROMPT 11: Mobile-First Experience
Ottimizza puraluce.it per mobile con:
- Touch-friendly UI (min 44px tap targets)
- Gesture support (swipe tra Pagine Sacre)
- Bottom navigation bar mobile
- Pull-to-refresh funzionalità
- Scroll infinito per archivio
- Share API nativa
- Copy-to-clipboard per frasi
- Haptic feedback (se disponibile)
- iOS Safe Area support
- Android theme-color dinamico

🔒 PROMPT PER SICUREZZA
PROMPT 12: Security Hardening
Implementa security best practices per puraluce.it:
- Content Security Policy headers
- CORS configuration appropriata
- Rate limiting su tutti gli endpoint
- Input sanitization (XSS prevention)
- SQL injection prevention (se DB futuro)
- CSRF tokens per form
- Cloudflare WAF rules
- DDoS protection via Cloudflare
- Headers sicurezza (HSTS, X-Frame-Options, etc.)
- Audit log per azioni amministrative
