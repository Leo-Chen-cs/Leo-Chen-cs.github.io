# Haotian Chen Academic Website

A static academic portfolio built with Astro, TypeScript, Tailwind CSS, MDX, and Astro Content Collections.

## Install and run locally

```bash
npm install
npm run dev
```

Astro prints the local URL in the terminal. For a production check, run `npm run build`; the generated static site is written to `dist/`.

## Edit personal information

- Core profile text, research areas, and publications: `src/data/site.ts`
- Homepage and experience summary: `src/pages/index.astro`
- Full CV page: `src/pages/cv.astro`
- Navigation and footer: `src/components/`

The GitHub and Google Scholar entries are intentionally marked as “add link” until their real profile URLs are supplied.

## Add a project

Create an `.md` or `.mdx` file in `src/content/projects/`. Copy an existing entry and edit its frontmatter. `paperUrl`, `codeUrl`, `projectUrl`, and `cover` are optional. The schema is defined in `src/content.config.ts`.

## Add a blog post

Create an `.md` or `.mdx` file in `src/content/blog/`. Use `formatting-demo.mdx` as a reference. Set `draft: true` to keep a post out of the generated site.

## Replace the profile image

Replace `public/images/haotian-chen.jpg` with a new image using the same filename, or update the image path and dimensions in `src/pages/index.astro`.

## Replace the CV

Replace `public/cv/haotian-chen-cv.pdf`. Keeping the filename means the download button will continue to work.

## Build

```bash
npm run build
```

Before publishing, you can also run `npm run check` for Astro and TypeScript diagnostics.

## Deploy to Cloudflare Pages

1. Connect the repository to Cloudflare Pages.
2. Use `npm run build` as the build command.
3. Use `dist` as the output directory.
4. Set `SITE_URL` to the final production origin, including `https://`.

No server runtime is required.

## Change the domain

Set the `SITE_URL` environment variable in the deployment platform. For a hard-coded fallback, update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.
