globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bs7vdGkE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C_wNZIl4.mjs';
import { g as getCollection } from '../chunks/_astro_content_BBKFxvh2.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Philosophy = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("philosophy");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Philosophy", "data-astro-cid-stld6yrx": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="overview-page" data-astro-cid-stld6yrx> <div class="page-header" data-astro-cid-stld6yrx> <h1 data-astro-cid-stld6yrx>Philosophy</h1> <img src="/doodles/philosophy_stickfigure.svg" alt="Philosophy" class="header-illustration" data-astro-cid-stld6yrx> </div> <div class="content-list" data-astro-cid-stld6yrx> ${posts.length > 0 ? posts.map((post) => renderTemplate`<a${addAttribute(`/philosophy/${post.slug}`, "href")} class="content-item" data-astro-cid-stld6yrx> <article data-astro-cid-stld6yrx> <h2 data-astro-cid-stld6yrx>${post.data.title}</h2> <p data-astro-cid-stld6yrx>${post.data.description}</p> </article> </a>`) : renderTemplate`<p class="empty-state" data-astro-cid-stld6yrx>Thoughts loading...</p>`} </div> </div> ` })} `;
}, "/home/wouter/projects/woutermaas.com/src/pages/philosophy.astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/philosophy.astro";
const $$url = "/philosophy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Philosophy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
