# Synote — AI Personal Assistant Website

Landing page for the Synote iOS app. Built with React + Vite, deployed on Azure Static Web Apps.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

This repo uses GitHub Actions to auto-deploy to Azure Static Web Apps on every push to `main`.

### First-time Azure setup

1. Create an **Azure Static Web App** in the Azure Portal (or CLI)
2. Copy the **deployment token** from the Azure resource
3. Add it as a GitHub secret: `Settings → Secrets → AZURE_STATIC_WEB_APPS_API_TOKEN`
4. Push to `main` — the workflow handles the rest

## Project Structure

```
src/
  components/
    Navbar.jsx       # Sticky nav with scroll effect
    Hero.jsx         # Animated waveform hero
    Features.jsx     # Feature cards grid
    HowItWorks.jsx   # 3-step process
    Download.jsx     # CTA section
    Footer.jsx       # Footer
  App.jsx
  main.jsx
  index.css          # Global tokens + reset
staticwebapp.config.json   # Azure SPA routing
.github/workflows/         # CI/CD pipeline
```
