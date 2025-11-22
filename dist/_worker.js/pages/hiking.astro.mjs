globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bs7vdGkE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C_wNZIl4.mjs';
import { g as getCollection } from '../chunks/_astro_content_BBKFxvh2.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Hiking = createComponent(async ($$result, $$props, $$slots) => {
  const hikes = await getCollection("hiking");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Hiking", "data-astro-cid-qyqdufxd": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hiking-page" data-astro-cid-qyqdufxd> <div class="page-header" data-astro-cid-qyqdufxd> <h1 data-astro-cid-qyqdufxd>Hiking</h1> <img src="/doodles/hiking_tent.svg" alt="Hiking Tent" class="header-illustration" data-astro-cid-qyqdufxd> </div> <div class="hikes-grid" data-astro-cid-qyqdufxd> ${hikes.length > 0 ? hikes.map((hike) => renderTemplate`<a${addAttribute(`/hiking/${hike.slug}`, "href")} class="hike-card" data-astro-cid-qyqdufxd> <div class="hike-background" data-astro-cid-qyqdufxd></div> <div class="hike-overlay" data-astro-cid-qyqdufxd></div> <div class="hike-content" data-astro-cid-qyqdufxd> <h2 data-astro-cid-qyqdufxd>${hike.data.title}</h2> <p data-astro-cid-qyqdufxd>${hike.data.description}</p> </div> </a>`) : renderTemplate`<p class="empty-state" data-astro-cid-qyqdufxd>Adventures coming soon...</p>`} </div> </div> ` })} `;
}, "/home/wouter/projects/woutermaas.com/src/pages/hiking.astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/hiking.astro";
const $$url = "/hiking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hiking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
