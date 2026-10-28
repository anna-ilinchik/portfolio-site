# Hanna Ilyinchyk — Frontend Developer

A single-page portfolio built with plain HTML, CSS, and JavaScript. Features
include a responsive layout, light and dark themes, a fixed header, contact
links, and a downloadable resume.

[View the live website](https://anna-ilinchik.github.io/portfolio-site/)

## Local preview

Run the following command from the project directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open <http://127.0.0.1:4173/> and keep the server running while browsing the site.

Python is used only as a convenient local HTTP server to serve the static files.
It is not part of the website, and there is no Python backend. You can use any
other static server, such as the VS Code Live Server extension, instead.

No build step or dependency installation is required.

## Deployment to GitHub Pages

The repository is configured to publish the contents of `dist/` automatically
when changes are pushed to `main`. GitHub Pages serves the static files directly;
Python is not needed in production.

To configure deployment in a new repository:

1. Create an empty GitHub repository. Use a public repository with GitHub Free.
2. Add the repository as the `origin` remote and push the `main` branch.
3. Open **Settings → Pages → Build and deployment** in the repository.
4. Set **Source** to **GitHub Actions**.
5. Open **Actions → Deploy website to GitHub Pages**. If needed, select
   **Run workflow** for the `main` branch.
6. After a successful run, find the website URL in **Settings → Pages** or in
   the workflow run summary.

Relative links to stylesheets, scripts, the portrait, and the PDF work when the
site is hosted under a repository subdirectory.

## Project structure

- `dist/` — website files ready to publish.
- `dist/assets/` — portrait, favicon, and PDF resume.
- `.github/workflows/deploy-pages.yml` — automatic GitHub Pages deployment.
- `.gitignore` — excludes preview screenshots, ZIP archives, and local Sites settings.

GitHub Pages makes the published files publicly accessible, including the portrait,
contact details, and PDF resume in `dist/`.

[GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
