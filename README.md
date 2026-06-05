# Civic Search Dashboard

Prototype search interface for exploring public-record entities, case metadata, and regional civic datasets.

## Why it exists

Public datasets are often fragmented across county portals, spreadsheets, and search systems. This project sketches a cleaner analyst workflow: enter a person, organization, county, or topic, then review confidence-scored matches with source and freshness context.

## Current status

Static browser prototype with hardcoded sample data; no backend, auth, or live integrations yet.

## Features

- Search/filter flow across names, counties, and record types using sample data
- Result cards with confidence, source, and update status
- Lightweight filtering for county, category, and risk signal
- Static demo that can run without a backend

## Tech

- HTML, CSS, and vanilla JavaScript
- Designed as a frontend shell for future Supabase or API-backed search

## Run locally

Open `index.html` in a browser.

## Roadmap

- Add real ingestion from county feeds
- Add saved searches and alert rules
- Add source reliability scoring
- Add authenticated analyst workspaces
