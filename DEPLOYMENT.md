# GitHub Pages deployment

The approved portfolio is prepared for static hosting. No professional copy or visual design was changed. The CV remains unavailable; no PDF was added.

## Configuration

- Next.js 16.3.6 uses `output: 'export'`, `trailingSlash: true` and `images.unoptimized: true`.
- `npm run build` creates `out/`; no separate `next export` command is needed.
- The approved PNG is served unchanged, at original quality. Static hosting does not provide Next.js's runtime image optimizer.
- `NEXT_PUBLIC_BASE_PATH` defaults to empty for a user site. The workflow reads the actual path from `actions/configure-pages`, so project repositories work too.
- Public image, favicon and future local CV URLs use `lib/public-asset.ts`. Next.js prefixes its own generated assets with `basePath`; a separate `assetPrefix` is unnecessary.
- Navigation anchors and external contact links require no path changes.

## Local preview

```sh
npm run typecheck
npm run build
npm start
```

This serves `out/` at http://localhost:3000 using Node, without Next.js server features. Use `PORT=3001 npm start` if port 3000 is occupied. Development remains `npm run dev`.

To test the project-site fallback:

```sh
NEXT_PUBLIC_BASE_PATH=/personal-pm-portfolio npm run build
NEXT_PUBLIC_BASE_PATH=/personal-pm-portfolio PORT=3002 npm start
```

Visit http://localhost:3002/personal-pm-portfolio/. Rebuild without that environment variable to restore a root-path export.

`scripts/verify-static.cjs` checks assets and interactions at five widths. Supply an installed Playwright module through `PLAYWRIGHT_MODULE` and the preview URL through `PREVIEW_URL`. No browser-test dependency was added.

## Remote deployment status

GitHub CLI is not installed in this environment, so authentication and GitHub username could not be checked. No repository was created, connected, committed or pushed. No GitHub workflow has run and there is no confirmed public URL. The directory was not previously a Git repository.

Install GitHub CLI from https://cli.github.com/ (or `brew install gh` if Homebrew is installed), then run:

```sh
gh auth login --hostname github.com --git-protocol https --web
gh auth status
gh api user --jq .login
```

After authentication, continue with these safety checks before creating a repository:

1. Check `<authenticated-username>.github.io`. If absent, create that public user-site repository. If it exists, preserve it and check `personal-pm-portfolio` instead. Do not overwrite an existing unrelated repository.
2. Initialize local Git on `main`. Review commit identity, staged files and the secret scan before committing. `.gitignore` excludes dependencies, exports, environment files, generated screenshots, caches and system files.
3. Commit the approved portfolio and deployment preparation, then push to the selected repository.
4. Enable GitHub Pages with GitHub Actions as its source. UI fallback: Repository → Settings → Pages → Build and deployment → Source → GitHub Actions.
5. Run/check **Deploy portfolio to GitHub Pages**, inspect failures and verify the public URL only after successful deployment.

The workflow `.github/workflows/pages.yml` runs on pushes to main and manual dispatch. It installs from the lockfile with `npm ci`, checks TypeScript, builds `out/`, uploads the Pages artifact and deploys with scoped permissions and the `github-pages` environment.

Expected URL after repository selection: `https://<username>.github.io/` for a user site, or `https://<username>.github.io/personal-pm-portfolio/` for a project site.

## Files changed

`next.config.mjs`, `.github/workflows/pages.yml`, `.gitignore`, `lib/public-asset.ts`, `components/hero.tsx` (image path only), `components/ui.tsx` (future CV path only), `app/layout.tsx` (favicon path only), `package.json` (static start command), `scripts/serve-static.mjs`, `scripts/verify-static.cjs`, `README.md`, `DEPLOYMENT.md`.

The launcher, navbar and section layouts were not modified.

## Validation results

- TypeScript: passed.
- Lint: not configured.
- Production/static export: passed for both empty base path and `/personal-pm-portfolio`.
- Five-width static-site checks cover image/favicon loading, anchors, mobile navigation, Experience/Project expansion, workflow playback/manual selection, exact contact links, disabled CV, launcher click/drag, overflow and browser errors.
- Separate static-launcher checks passed mouse/touch dragging, snapping, dismissal, keyboard, reduced motion and Contact visibility.
- Brief obvious-credential scan found no matches in project source/configuration; generated dependencies/builds were excluded.
- One legacy long-running browser test hit a launcher/menu overlap after repeated scrolling and viewport changes. Fresh-load navigation checks passed at each width. This is recorded separately from deployment compatibility; the approved launcher was not changed in this deployment-only task.

References: [Next.js Pages starter workflow](https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml), [GitHub custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
