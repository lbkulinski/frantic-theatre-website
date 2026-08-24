# Frantic Theatre Co. website

Static HTML/CSS site, no build step. Open any `.html` file directly in a
browser to preview, or serve the folder locally:

```
cd frantic-theatre-website
python3 -m http.server 8000
```

then visit http://localhost:8000

## Structure

- `index.html` — About Us (mission, history, staff/ensemble bios)
- `productions.html` — Past Productions (corkboard photo gallery)
- `upcoming.html` — Upcoming Projects (auto-hides when nothing's booked —
  see `js/upcoming.js`)
- `contact.html` — Contact (email, Instagram)
- `styles.css` — shared stylesheet (all colors/fonts are CSS variables at
  the top — easy to restyle later)
- `js/upcoming.js` — the list of upcoming events lives here; edit the
  `EVENTS` array when a show is booked
- `CNAME` — tells GitHub Pages to serve the site at frantictheatreco.org
  once it's deployed there (see Deploying below)

All placeholder text is wrapped in `[BRACKETS]` — search the files for
`[` or `PLACEHOLDER` to find everything that still needs real content.
