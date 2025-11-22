globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bs7vdGkE.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BBKFxvh2.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C_wNZIl4.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const essays = await getCollection("philosophy");
  return essays.map((essay) => ({
    params: { slug: essay.slug },
    props: { essay }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { essay } = Astro2.props;
  const { Content } = await essay.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": essay.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="philosophy-detail"> <header class="page-header"> <h1>${essay.data.title}</h1> <div class="divider"></div> </header> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ` })}`;
}, "/home/wouter/projects/woutermaas.com/src/pages/philosophy/[slug].astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/philosophy/[slug].astro";
const $$url = "/philosophy/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
