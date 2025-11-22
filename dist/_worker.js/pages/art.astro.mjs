globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bs7vdGkE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C_wNZIl4.mjs';
import { g as getCollection } from '../chunks/_astro_content_BBKFxvh2.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Art = createComponent(async ($$result, $$props, $$slots) => {
  const art = await getCollection("art");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Art", "data-astro-cid-fntbhq7i": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="art-page" data-astro-cid-fntbhq7i> <div class="page-header" data-astro-cid-fntbhq7i> <h1 data-astro-cid-fntbhq7i>Art</h1> <img src="/doodles/artist_did_not_submit_artwork.svg" alt="Art" class="header-illustration" data-astro-cid-fntbhq7i> </div> <div class="art-grid" data-astro-cid-fntbhq7i> ${art.length > 0 ? art.map((item) => renderTemplate`<a${addAttribute(`/art/${item.slug}`, "href")} class="art-item" data-astro-cid-fntbhq7i> <div class="art-image" data-astro-cid-fntbhq7i>  <div class="placeholder" data-astro-cid-fntbhq7i> <span data-astro-cid-fntbhq7i>+</span> </div> </div> <h2 data-astro-cid-fntbhq7i>${item.data.title}</h2> </a>`) : renderTemplate`<p class="empty-state" data-astro-cid-fntbhq7i>Gallery coming soon...</p>`} </div> </div> ` })} `;
}, "/home/wouter/projects/woutermaas.com/src/pages/art.astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/art.astro";
const $$url = "/art";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Art,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
