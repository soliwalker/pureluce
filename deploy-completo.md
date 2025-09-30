Genera script bash completo per deploy puraluce.it:

1. Prerequisiti check:
   - Cloudflare account configurato
   - Wrangler CLI installato e autenticato
   - Node.js versione corretta
   - Dominio puraluce.it aggiunto a Cloudflare

2. Build process:
   - Minifica CSS/JS
   - Ottimizza immagini
   - Genera sitemap
   - Valida JSON Pagine Sacre
   - Build service worker

3. Deploy:
   - Upload asset statici a Pages
   - Deploy Workers API
   - Populate KV namespaces con dati iniziali
   - Configure DNS se necessario
   - Setup redirects

4. Post-deploy:
   - Smoke tests automatici
   - Purge cache Cloudflare
   - Warm-up cache critico
   - Send notification deploy success

5. Rollback procedure se errori

Include logging dettagliato e colori terminal per UX migliore.