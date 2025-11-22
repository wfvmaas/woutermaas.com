globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bs7vdGkE.mjs';
import { $ as $$BaseLayout, a as $$WizardMenuButton } from '../chunks/BaseLayout_C_wNZIl4.mjs';
import { $ as $$ScrollIndicator } from '../chunks/ScrollIndicator_DTA4cUSE.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "showFooter": true, "showWizardMenu": false, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="home-page" data-astro-cid-j7pv25f6> <!-- Sticky Illustrations Container --> <div class="sticky-illustrations" data-astro-cid-j7pv25f6> <!-- Wizard (Top Right) --> <img src="/doodles/wizard_cloud_1.svg" alt="Wizard on a cloud" class="wizard" data-astro-cid-j7pv25f6> <!-- Dragon (Center/Right) --> <img src="/doodles/dragon_1.svg" alt="Dragon" class="dragon" data-astro-cid-j7pv25f6> </div> <!-- Mobile Wizard Menu Button --> ${renderComponent($$result2, "WizardMenuButton", $$WizardMenuButton, { "isHomePage": true, "data-astro-cid-j7pv25f6": true })} <!-- Scrollable Content --> <div class="scrollable-content" data-astro-cid-j7pv25f6> <!-- Hero Section --> <section class="hero-section" data-astro-cid-j7pv25f6> <div class="content" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Hello</h1> <div class="intro-text" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
My name is Wouter a creative software wizard who likes to build
              all sorts of things
</p> <p data-astro-cid-j7pv25f6>Feel invited to get to know one of my many wizard hats</p> </div> </div> </section> <!-- Scroll Indicator --> <div class="scroll-indicator-wrapper" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ScrollIndicator", $$ScrollIndicator, { "scale": 1.5, "target": "#menu-section", "data-astro-cid-j7pv25f6": true })} </div> <!-- Menu Section --> <section class="menu-section" id="menu-section" data-astro-cid-j7pv25f6> <nav data-astro-cid-j7pv25f6> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6> <a href="/software" data-astro-cid-j7pv25f6> Software </a> </li> <li data-astro-cid-j7pv25f6> <a href="/storytelling" data-astro-cid-j7pv25f6> Storytelling </a> </li> <li data-astro-cid-j7pv25f6> <a href="/philosophy" data-astro-cid-j7pv25f6> Philosophy </a> </li> <li data-astro-cid-j7pv25f6> <a href="/art" data-astro-cid-j7pv25f6> Art </a> </li> <li data-astro-cid-j7pv25f6> <a href="/hiking" data-astro-cid-j7pv25f6> Hiking </a> </li> <li data-astro-cid-j7pv25f6> <a href="/cv" data-astro-cid-j7pv25f6> Serious CV </a> </li> <li data-astro-cid-j7pv25f6> <a href="/contact" data-astro-cid-j7pv25f6> Contact </a> </li> </ul> </nav> </section> </div> </div> ` })} `;
}, "/home/wouter/projects/woutermaas.com/src/pages/index.astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
