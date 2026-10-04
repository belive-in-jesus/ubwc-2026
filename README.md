# UBWC 2026 Website

Official static website for the UltraBullet World Championship.

## Run locally

No build system is required. Open `index.html` in a browser, or use a local static server.

## GitHub Pages

This corrected V2 is designed to be published from the repository root. `index.html` is the entry point and all CSS/JS/data paths are explicitly relative.

1. Create a GitHub repository, e.g. `ubwc-2026`.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

The site is intentionally static in V1. Tournament data is separated into `/data` so that a later Lichess API/data-import layer can replace the placeholder data without redesigning the public site.

## Important

Do not put API tokens, passwords or private organizer credentials into this repository.

## Planned V2

- Lichess tournament result importer
- automatic team standings
- individual standings
- organizer dashboard
- roster management
- qualification status
- live battle status
- automated result validation

## V2 tournament engine

`js/engine.js` now processes the JSON data layer.

`data/results.json` accepts battles such as:

```json
{
  "id": "qualifier-b1",
  "stage": "First Qualifier",
  "date": "2026-10-11",
  "scores": [
    {
      "playerId": "player-id",
      "account": "lichess_username",
      "teamId": "team-id",
      "score": 123
    }
  ]
}
```

The score must be the final score reported by Lichess for that account in that tournament.

V2 is still a client-side/static calculation engine. It is **not yet the official Lichess API integration** and does not authenticate organizers. The next version should use a secure server-side/API layer. Never put API tokens, passwords, or other secrets in this public repository.
