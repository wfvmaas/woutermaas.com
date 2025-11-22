globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bs7vdGkE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C_wNZIl4.mjs';
import { g as getCollection } from '../chunks/_astro_content_BBKFxvh2.mjs';
import { $ as $$ScrollIndicator } from '../chunks/ScrollIndicator_DTA4cUSE.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("software")).sort(
    (a, b) => (a.data.order ?? 99) - (b.data.order ?? 99)
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Software", "data-astro-cid-vulknyey": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="overview-page" data-astro-cid-vulknyey> <div class="page-header" data-astro-cid-vulknyey> <div class="header-content" data-astro-cid-vulknyey> <div class="illustration-container" data-astro-cid-vulknyey> <img src="/doodles/software_factory.svg" alt="Software Factory" class="header-illustration" data-astro-cid-vulknyey> </div> <div class="text-content" data-astro-cid-vulknyey> <h1 data-astro-cid-vulknyey>Software</h1> <p class="intro-text" data-astro-cid-vulknyey>
In need of a creative programmer? I like to build software for all
            kinds of purposes but preferably I work on projects that make the
            world a little more interesting
</p> </div> <div class="scroll-indicator-wrapper" data-astro-cid-vulknyey> ${renderComponent($$result2, "ScrollIndicator", $$ScrollIndicator, { "target": "#projects-list", "data-astro-cid-vulknyey": true })} </div> </div> </div> <div class="projects-list" id="projects-list" data-astro-cid-vulknyey> ${projects.map((project) => renderTemplate`<article class="project-item" data-astro-cid-vulknyey> <h2 class="project-title" data-astro-cid-vulknyey>${project.data.title}</h2> ${project.data.heroImage && renderTemplate`<div class="project-image" data-astro-cid-vulknyey> <img${addAttribute(
    typeof project.data.heroImage === "string" ? project.data.heroImage : project.data.heroImage.src,
    "src"
  )}${addAttribute(project.data.title, "alt")} loading="lazy" data-astro-cid-vulknyey> </div>`} <div class="project-content" data-astro-cid-vulknyey> <p class="project-description" data-astro-cid-vulknyey>${project.body}</p> ${project.data.title === "STOOR.net" && renderTemplate`<a href="https://stoor.net" target="_blank" rel="noopener noreferrer" class="learn-more-btn" data-astro-cid-vulknyey>
Learn more
</a>`} </div> </article>`)} </div> </div> ` })} `;
}, "/home/wouter/projects/woutermaas.com/src/pages/software/index.astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/software/index.astro";
const $$url = "/software";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
