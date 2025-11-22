globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bs7vdGkE.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BBKFxvh2.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_C_wNZIl4.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const hikes = await getCollection("hiking");
  return hikes.map((hike) => ({
    params: { slug: hike.slug },
    props: { hike }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { hike } = Astro2.props;
  const { Content } = await hike.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": hike.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="hiking-detail"> <div class="hero-section">  <div class="gradient-overlay"></div> <div class="hero-content"> <h1>${hike.data.title}</h1> ${hike.data.description && renderTemplate`<p class="description">${hike.data.description}</p>`} </div> </div> <div class="content-section"> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </article> ` })}`;
}, "/home/wouter/projects/woutermaas.com/src/pages/hiking/[slug].astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/hiking/[slug].astro";
const $$url = "/hiking/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
