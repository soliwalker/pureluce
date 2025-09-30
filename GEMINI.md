# Pura Luce

## Project Overview

This project is a static website called "Pura Luce" with the tagline "Fedele Messaggero - Fuoco nel corpo · Presenza nel giorno · Regno nella carne". It appears to be a website focused on spirituality, Catholicism, and meditation.

The project is built using plain HTML, CSS, and JavaScript, and it's deployed using Cloudflare Pages. It also includes a setup for Cloudflare Workers and KV namespaces, which suggests that serverless functionalities like handling email subscriptions and serving dynamic content are planned or in place.

## Building and Running

The project has a simple build process defined in `package.json`.

*   **Build:** To minify the CSS and JavaScript assets, run the following command:
    ```bash
    npm run build
    ```

*   **Deploy:** To deploy the website to Cloudflare Pages, run the following command:
    ```bash
    npm run deploy
    ```
    This command executes the `scripts/deploy.sh` script.

## Development Conventions

*   The website's main content is in the `public` directory.
*   Serverless functions are located in the `workers` directory.
*   The project uses Cloudflare KV namespaces for data storage, as defined in `wrangler.toml`. The namespaces are:
    *   `PAGINE_SACRE`: Likely for storing sacred pages or content.
    *   `EMAIL_SUBS`: For managing email subscriptions.
    *   `CACHE`: For caching data.
