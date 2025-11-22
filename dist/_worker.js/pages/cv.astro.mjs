globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bs7vdGkE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C_wNZIl4.mjs';
/* empty css                              */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Serious CV", "data-astro-cid-zuwcdr5b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="cv-page" data-astro-cid-zuwcdr5b> <header class="cv-header" data-astro-cid-zuwcdr5b> <h1 data-astro-cid-zuwcdr5b>Wouter Maas</h1> <p class="subtitle" data-astro-cid-zuwcdr5b>Medior Web Developer</p> <div class="meta" data-astro-cid-zuwcdr5b> <span data-astro-cid-zuwcdr5b>Vue / Nuxt Specialist</span> <span data-astro-cid-zuwcdr5b>Creative Technologist</span> <span data-astro-cid-zuwcdr5b>Problem Solver</span> </div> </header> <section class="cv-section" data-astro-cid-zuwcdr5b> <h2 data-astro-cid-zuwcdr5b>Experience</h2> <div class="experience-list" data-astro-cid-zuwcdr5b> <div class="experience-item" data-astro-cid-zuwcdr5b> <div class="experience-header" data-astro-cid-zuwcdr5b> <h3 data-astro-cid-zuwcdr5b>Senior Web Developer</h3> <span class="date" data-astro-cid-zuwcdr5b>2020 - Present</span> </div> <p class="company" data-astro-cid-zuwcdr5b>Company Name</p> <p class="description" data-astro-cid-zuwcdr5b>
Leading frontend development using Vue.js and Nuxt. Architecting
            scalable web applications and mentoring junior developers.
</p> </div> <!-- More items... --> </div> </section> <section class="cv-section" data-astro-cid-zuwcdr5b> <h2 data-astro-cid-zuwcdr5b>Skills</h2> <div class="skills-grid" data-astro-cid-zuwcdr5b> <div class="skill-card" data-astro-cid-zuwcdr5b> <h3 data-astro-cid-zuwcdr5b>Frontend</h3> <p data-astro-cid-zuwcdr5b>Vue, Nuxt, Astro, Less, TypeScript</p> </div> <div class="skill-card" data-astro-cid-zuwcdr5b> <h3 data-astro-cid-zuwcdr5b>Tools</h3> <p data-astro-cid-zuwcdr5b>Git, Figma, VS Code</p> </div> <!-- More items... --> </div> </section> </div> ` })} `;
}, "/home/wouter/projects/woutermaas.com/src/pages/cv.astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
