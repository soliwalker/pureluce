#!/bin/bash

# Colori per il terminale
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PROJECT_NAME="puraluce-fedele-messaggero"

# Funzione per loggare i messaggi
log() {
    echo -e "${YELLOW}[LOG] $(date +'%T') - $1${NC}"
}

# Funzione per loggare gli errori
error() {
    echo -e "${RED}[ERROR] $(date +'%T') - $1${NC}"
}

# Funzione per loggare i successi
success() {
    echo -e "${GREEN}[SUCCESS] $(date +'%T') - $1${NC}"
}

# --- INIZIO SCRIPT ---

log "Inizio deploy di puraluce.it"

# 1. PREREQUISITI
log "Controllo prerequisiti..."

# Controllo Wrangler CLI
if ! command -v wrangler &> /dev/null
then
    error "Wrangler CLI non trovato. Installalo con 'npm install -g wrangler'."
    exit 1
fi
log "Wrangler CLI trovato."

# Controllo Node.js
# (Aggiungere un controllo di versione se necessario)
if ! command -v node &> /dev/null
then
    error "Node.js non trovato. Installalo per continuare."
    exit 1
fi
log "Node.js trovato."

# Autenticazione Wrangler (apre il browser se non già loggato)
log "Verifica autenticazione Cloudflare..."
wrangler whoami

success "Prerequisiti soddisfatti."

# 2. BUILD PROCESS
log "Inizio processo di build..."

# Minifica CSS/JS (placeholder, da implementare con uno strumento come 'terser' o 'esbuild')
npm run build
success "Build completato."

# 3. DEPLOY
log "Inizio deploy su Cloudflare..."

# Controlla se il progetto Pages esiste già
if ! wrangler pages project list | grep -q $PROJECT_NAME; then
    log "Progetto Pages '$PROJECT_NAME' non trovato. Lo creo..."
    wrangler pages project create $PROJECT_NAME --production-branch main
    success "Progetto Pages '$PROJECT_NAME' creato."
else
    log "Progetto Pages '$PROJECT_NAME' già esistente."
fi

# Deploy a Pages (asset statici)
log "Deploy degli asset statici e dei workers su Cloudflare Pages..."
wrangler pages deploy public --project-name=$PROJECT_NAME

success "Deploy su Cloudflare completato."

# 4. POST-DEPLOY
log "Inizio operazioni post-deploy..."

# Visualizza i log del deployment
log "Visualizzazione dei log del deployment in tempo reale..."
wrangler pages deployment tail --project-name=$PROJECT_NAME

success "Operazioni post-deploy completate."

# --- FINE SCRIPT ---

success "Deploy di puraluce.it terminato con successo!"
