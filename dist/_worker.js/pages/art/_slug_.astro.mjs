globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bs7vdGkE.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BBKFxvh2.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C_wNZIl4.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const art = await getCollection("art");
  return art.map((item) => ({
    params: { slug: item.slug },
    props: { item }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { item } = Astro2.props;
  const { Content } = await item.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": item.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="art-detail"> <div class="art-grid"> <div class="art-image">  <span class="placeholder">Image</span> </div> <div class="art-info"> <h1>${item.data.title}</h1> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </article> ` })}`;
}, "/home/wouter/projects/woutermaas.com/src/pages/art/[slug].astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/art/[slug].astro";
const $$url = "/art/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
