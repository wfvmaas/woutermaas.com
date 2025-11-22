globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bs7vdGkE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C_wNZIl4.mjs';
import { g as getCollection } from '../chunks/_astro_content_BBKFxvh2.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Storytelling = createComponent(async ($$result, $$props, $$slots) => {
  const stories = await getCollection("storytelling");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Storytelling", "data-astro-cid-wnoucif6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="overview-page" data-astro-cid-wnoucif6> <div class="page-header" data-astro-cid-wnoucif6> <h1 data-astro-cid-wnoucif6>Storytelling</h1> <img src="/doodles/storytelling.svg" alt="Storytelling" class="header-illustration" data-astro-cid-wnoucif6> </div> <div class="stories-list" data-astro-cid-wnoucif6> ${stories.length > 0 ? stories.map((story) => renderTemplate`<a${addAttribute(`/storytelling/${story.slug}`, "href")} class="story-item" data-astro-cid-wnoucif6> <article data-astro-cid-wnoucif6> <h2 data-astro-cid-wnoucif6>${story.data.title}</h2> <p data-astro-cid-wnoucif6>${story.data.description}</p> </article> </a>`) : renderTemplate`<p class="empty-state" data-astro-cid-wnoucif6>Stories being written...</p>`} </div> </div> ` })} `;
}, "/home/wouter/projects/woutermaas.com/src/pages/storytelling.astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/storytelling.astro";
const $$url = "/storytelling";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Storytelling,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
