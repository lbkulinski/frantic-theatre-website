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

## Punch list for Saturday's meeting

Bring back answers to these and the site can go from placeholder to real:

**About page**
- Mission statement (a paragraph or two)
- Company history / origin story
- Staff & ensemble bios — name, role, short bio for each person

**Past Productions**
- Which shows to feature, in what order
- Per show: date, venue, credits (director/cast), any notable
  notes (awards, sold-out run, etc.)
- Photos — drop them in `images/productions/` (see the README there)

**Upcoming Projects**
- Any shows/events currently booked — title, date, venue, ticket/info link
- Longer-term: whether to link this to an actual Google Calendar instead
  of hand-editing the event list (skipped for now, see note in
  `js/upcoming.js`)

**Contact**
- Confirm company email address
- Confirm Instagram handle/link

**Brand / aesthetics**
- Current design is a placeholder direction (warm/indie, corkboard +
  ticket-stub motifs) — flag if the group wants a different visual
  direction, has a logo, or has brand colors already in mind
- Domain `frantictheatreco.org` is purchased but not yet pointed at
  hosting — decide where this gets deployed (Netlify, GitHub Pages, etc.)

## Deploying to GitHub Pages with the custom domain

1. Push this folder to a GitHub repo, then in the repo's Settings → Pages,
   set the source to the branch/folder this site lives in.
2. The `CNAME` file already in this folder tells GitHub Pages to serve
   the site at `frantictheatreco.org` — no extra step needed there.
3. At your domain registrar, point DNS at GitHub Pages:
   - four `A` records for the apex domain (`frantictheatreco.org`) to
     GitHub's IPs: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - optionally a `CNAME` record for `www` pointing to
     `<your-github-username>.github.io`
4. Back in Settings → Pages, enter `frantictheatreco.org` as the custom
   domain and enable "Enforce HTTPS" once it's verified (can take a
   little while after DNS propagates).
