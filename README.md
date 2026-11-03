# Azmera Abebe Teshale — Personal Portfolio

A responsive, dark professional portfolio built with React, Vite and Tailwind CSS.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build and preview

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages (free)

This repository is configured for the GitHub username `azmeraa` and repository name `azmeraa.github.io`.

1. Create a **public** GitHub repository named exactly `azmeraa.github.io`.
2. Upload/push all files in this project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish successfully.
6. Visit **https://azmeraa.github.io/**.

Every push to `main` triggers a new deployment. If you instead use a repository with a different name, update `base` in `vite.config.js` to `'/YOUR-REPOSITORY-NAME/'`.

## Before publishing

- Review the wording, dates, project descriptions and contact details.
- Add a professional headshot if you want one; the current hero uses an initials monogram and does not invent a portrait.
- Add a PDF CV to `public/` only after checking that it is the final version. Then add a visible CV download link in `src/App.jsx`.
- Consider adding your LinkedIn URL when you have one you want to publish.
- Keep project claims aligned with the README and source code. FraudShield and TASK-CRE-63 include explicit prototype/test-data caveats.

## Update content

Most content is in `src/App.jsx`: edit the `projects`, `skills`, and `experience` arrays and the About/Contact text. Styling is in `src/styles.css` and Tailwind configuration is in `tailwind.config.js`.
