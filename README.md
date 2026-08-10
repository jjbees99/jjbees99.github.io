# Jacob Beeson — portfolio

An original editorial portfolio for Jacob Beeson: molecular bioengineering, experiments, software and physical prototypes. Built with React, TypeScript, Vite and `HashRouter`, with no backend or paid dependency.

## Install and preview

On Windows / PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local address printed by Vite. Normal `npm install` and `npm run dev` work where PowerShell script execution is not restricted.

Production checks:

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
```

## Edit the identity and content

- Change the name, email, social links, CV link, location and deployed URL in `src/content/siteConfig.ts`.
- Replace the temporary mark only in `src/components/Logo.tsx`.
- Replace About-page biography and experience in `src/pages/AboutPage.tsx`.
- Change colours and spacing in `src/styles/tokens.css`; layout rules live in `src/styles/global.css`.
- The design intentionally uses the system Arial/Helvetica stack, so there is no font request or layout-blocking download. Change `--font` in `tokens.css` to use another local or self-hosted font.
- Update title, description, canonical URL, Open Graph/Twitter metadata and Person structured data in `index.html`. Also update `public/robots.txt`, `public/sitemap.xml`, and `public/social-preview.svg`.

## How to add a new project

1. Copy an existing project object in `src/content/projects.ts`.
2. Give it a unique URL-safe `slug` and change all content. Placeholder entries make no scientific claims; replace them with verified details.
3. Add images to `public/media/projects/project-name/` and use paths beginning `/media/projects/...`.
4. Add a local video or external YouTube/Vimeo source to the optional `video` field.
5. Commit and push. The listing, detail route, filters, and previous/next navigation update from the data automatically.

Images should be compressed SVG, WebP, AVIF or JPEG. Provide meaningful alt language by keeping project titles clear; customise component alt text if a real image needs more detail.

## Videos

GitHub Pages is static and does not provide a live upload system.

- Option A: Add a small compressed MP4 to `public/media/videos/` and set `type: 'local'`. Add accurate WebVTT captions and a poster. Aim below 10–20 MB where practical.
- Option B: Upload to YouTube or Vimeo and use its embed URL with `type: 'youtube'` or `type: 'vimeo'`.
- Option C: Use a dedicated media host and put its playable URL in `src/content/videos.ts`.

External hosting is recommended for large files. Local video uses `preload="none"`; embeds and images lazy-load. Do not autoplay with sound.

## CV

Replace `public/resume/jacob-beeson-cv-placeholder.pdf` with a real PDF using the same filename, or update `cvUrl` in `siteConfig.ts`. The included file is deliberately only a labelled placeholder, not a real résumé.

## Publish with GitHub Pages

1. Create a GitHub repository and commit this project.
2. Push it to a `main` branch.
3. In the repository, open **Settings → Pages**.
4. Select **GitHub Actions** as the source.
5. Wait for the **Deploy to GitHub Pages** workflow.
6. Open the URL shown by the completed deployment.

The workflow runs `npm ci`, builds, uploads `dist`, and deploys it. `vite.config.ts` detects the repository name from `GITHUB_REPOSITORY`: project sites use `/repository-name/`, while `username.github.io` sites use `/`. Override this with `VITE_BASE_PATH` if needed. Hash-based routes keep detail pages working on refresh.

Example first push:

```powershell
git init
git add .
git commit -m "Build Jacob Beeson portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## Optional contact form

The published contact page uses honest email/social links. If a form is later required, connect a form component to a Formspree endpoint you control and document its privacy behaviour. Do not show a success message unless the endpoint actually accepts the request.

## Troubleshooting

- Blank deployed page: confirm Pages uses GitHub Actions and inspect the workflow build log.
- Missing assets: use root-style public paths such as `/media/...`; Vite rewrites them for the configured base.
- Local MP4 does not play: confirm the filename and use a broadly supported H.264/AAC MP4.
- Project route not found: verify the link slug exactly matches an object in `projects.ts`.
- `npm.ps1` blocked: use the documented `npm.cmd` commands.
- Stale deployment: hard-refresh after the Pages workflow completes.
