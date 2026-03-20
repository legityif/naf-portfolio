# Yifan Yang Portfolio (React)

A production-ready portfolio site built with React and Vite, with a minimalist dark theme.

## Tech stack

- React
- Vite
- ESLint

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown by Vite (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The optimized output is generated in `dist/`.

## Deploy to a real URL

### Option 1: Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Vercel auto-detects Vite and runs `npm run build`.
4. Your site will be deployed on a public URL.

### Option 2: Netlify

1. Push this repository to GitHub.
2. Import in Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

`netlify.toml` is already included.

## Notes

- Update contact details in `src/components/Contact.jsx`.
- Update projects/experience data in `src/data/portfolioData.js`.
