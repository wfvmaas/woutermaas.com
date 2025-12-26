# Wouter Maas Portfolio

This is the portfolio website for Wouter Maas, built with [Astro](https://astro.build) and [Vue.js](https://vuejs.org). It showcases various projects across different disciplines including software, storytelling, philosophy, art, and hiking.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- `pnpm`

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
pnpm install
```

### Development

Start the local development server:

```bash
pnpm dev
```

Visit `http://localhost:4321` to view the site.

### Build

Build the project for production:

```bash
pnpm build
```

Previews the build locally:

```bash
pnpm preview
```

## Project Structure

```
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable Vue/Astro components
│   ├── content/      # Content Collections (Markdown files)
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   ├── styles/       # Global styles (Less)
│   └── utils/        # Utility functions
├── astro.config.mjs  # Astro configuration
└── package.json
```

## Content Management

The content for this portfolio is managed using **Astro Content Collections** located in `src/content/`. Each major section of the site has its own folder and collection.

### Collections

- **Software**: `src/content/software/`
- **Storytelling**: `src/content/storytelling/`
- **Philosophy**: `src/content/philosophy/`
- **Art**: `src/content/art/`
- **Hiking**: `src/content/hiking/`
- **Abstracts**: `src/content/abstracts/`

### Adding New Content

To add a new project or entry:

1.  Navigate to the appropriate directory in `src/content/` (e.g., `src/content/software/`).
2.  Create a new Markdown file (e.g., `my-new-project.md`).
3.  Add the required **Frontmatter** at the top of the file.

#### Frontmatter Schema

Most project collections (Software, Storytelling, Art, etc.) use a similar schema:

```yaml
---
title: "Project Title"
abstract: "A brief summary or abstract of the project."
order: 1 # Optional: For manual sorting
publishDate: 2023-01-01 # Optional
heroImage: "/images/path/to/image.jpg" # Optional: Path matching public/ folder
link: "https://example.com" # Optional: External link
---

Your main content goes here using Markdown...
```

**Note on Images:**
- Place images in the `public/` directory (e.g., `public/images/software/`).
- Reference them in the frontmatter as absolute paths string (e.g., `/images/software/image.jpg`).

### Abstracts Collection

The `abstracts` collection (`src/content/abstracts/`) serves as a collection of reusable texts that can be used on the overviewpages.

```yaml
---
title: "Section Title"
abstract: "Description of the section."
categories:
  - name: "Category Name"
    order: 1
heroImage: "/path/to/image.jpg"
---
```

## Tech Stack

- **Framework**: Astro 5
- **UI Framework**: Vue 3
- **Styling**: Less
- **Deployment**: Cloudflare Pages (SSR Adapter)
