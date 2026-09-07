# Suprit Chavan — Portfolio

A full-stack JavaScript developer portfolio built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Deploy for free — get a real URL

### Option A: Vercel (recommended, easiest)

1. Create a free account at https://vercel.com (sign in with GitHub).
2. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/supritchavan28/portfolio.git
   git push -u origin main
   ```
3. In Vercel, click **Add New → Project**, import that GitHub repo.
4. Vercel auto-detects Vite — leave the defaults and click **Deploy**.
5. In ~1 minute you'll get a live URL like `suprit-chavan-portfolio.vercel.app`.
   You can also add a custom domain later from the Vercel dashboard.

### Option B: Netlify (drag-and-drop, no GitHub needed)

1. Run `npm install` then `npm run build` locally — this creates a `dist/` folder.
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder onto the page.
4. Netlify gives you a live URL immediately (e.g. `random-name-123.netlify.app`),
   which you can rename in the site settings.

### Option C: GitHub Pages

1. Push this project to a GitHub repo named `<your-username>.github.io`,
   or any repo + enable Pages with a `gh-pages` branch.
2. Add `"homepage"` to `package.json` and use a tool like `gh-pages` npm package,
   or just use Vercel/Netlify above — they're simpler for Vite projects.

## Before you deploy

- Replace the "Download Resume" button links (`href="#"` in `App.jsx`, in both
  the nav and About section) with a real path to your resume PDF once you add
  one to a `public/` folder, e.g. `href="/resume.pdf"`.
- Feel free to add more project cards to the `PROJECTS` array in `App.jsx` once
  you have descriptions for your other GitHub repos.
