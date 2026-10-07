# UBWC 2026 — Website V3

Preparation-phase website for the **UltraBullet World Championship**.

## Current state

The public website deliberately contains **no fixed tournament dates**. The event is presented as being in preparation.

All later publication switches live in:

`data/config.json`

### Main switches

- `registrationOpen`
- `schedulePublished`
- `qualifiersPublished`
- `playersPublished`
- `standingsVisible`
- `resultsVisible`
- `finalPublished`
- `countdownEnabled`

## GitHub Pages

1. Upload the contents of this folder to the GitHub repository.
2. Keep `index.html` in the repository root.
3. Keep `styles.css`, `app.js`, and the `data/` folder beside it.
4. In GitHub: **Settings → Pages → Deploy from a branch**.
5. Select the branch containing these files and the `/ (root)` folder.

## Publishing the event later

When the schedule is officially decided, edit only `data/config.json` first.

Example:

```json
"visibility": {
  "registrationOpen": true,
  "schedulePublished": true,
  "qualifiersPublished": true,
  "playersPublished": true,
  "standingsVisible": true,
  "resultsVisible": true,
  "finalPublished": true,
  "countdownEnabled": true
}
```

Then add the real links and event data.

## Important

Do not put provisional dates into the public site. The preparation version is intentionally date-free until the organizers officially confirm the schedule.
