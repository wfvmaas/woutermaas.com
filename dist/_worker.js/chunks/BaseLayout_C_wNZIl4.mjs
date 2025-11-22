globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, k as renderScript, b as renderTemplate, l as renderHead, n as renderSlot, r as renderComponent } from './astro/server_Bs7vdGkE.mjs';
/* empty css                       */

const $$Astro$1 = createAstro();
const $$WizardMenuButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WizardMenuButton;
  const { isHomePage = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="wizard-menu-button" id="wizard-menu-btn"${addAttribute(isHomePage, "data-is-home")} data-astro-cid-am4rdd3w> <img src="/doodles/wizard_cloud_1.svg" alt="Menu" data-astro-cid-am4rdd3w> <div class="menu-label" data-astro-cid-am4rdd3w>Menu</div> </div>  ${renderScript($$result, "/home/wouter/projects/woutermaas.com/src/components/WizardMenuButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wouter/projects/woutermaas.com/src/components/WizardMenuButton.astro", void 0);

const $$MobileMenuModal = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/software", label: "Software" },
    { href: "/storytelling", label: "Storytelling" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/art", label: "Art" },
    { href: "/hiking", label: "Hiking" },
    { href: "/cv", label: "Serious CV" },
    { href: "/contact", label: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mobile-menu-modal" id="mobile-menu-modal" data-astro-cid-nhv7scj7> <div class="backdrop" id="mobile-menu-backdrop" data-astro-cid-nhv7scj7></div> <div class="menu-content" data-astro-cid-nhv7scj7> <button class="close-btn" id="mobile-menu-close" data-astro-cid-nhv7scj7> <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-nhv7scj7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-nhv7scj7></path> </svg> </button> <nav data-astro-cid-nhv7scj7> <ul data-astro-cid-nhv7scj7> ${links.map((link) => renderTemplate`<li data-astro-cid-nhv7scj7> <a${addAttribute(link.href, "href")} data-astro-cid-nhv7scj7>${link.label}</a> </li>`)} </ul> </nav> </div> </div>  ${renderScript($$result, "/home/wouter/projects/woutermaas.com/src/components/MobileMenuModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wouter/projects/woutermaas.com/src/components/MobileMenuModal.astro", void 0);

const $$CastleFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="castle-footer" data-astro-cid-srrce6um> <div class="castle-illustration" data-astro-cid-srrce6um> <img src="/doodles/castle_1.svg" alt="Castle" data-astro-cid-srrce6um> </div> <p class="footer-text" data-astro-cid-srrce6um>I have a castle, I don't need a footer</p> </footer> `;
}, "/home/wouter/projects/woutermaas.com/src/components/CastleFooter.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Portfolio of Wouter Maas - Web Developer, Storyteller, Philosopher.",
    showFooter = true,
    showWizardMenu = true
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Wouter Maas</title>${renderHead()}</head> <body data-astro-cid-37fxchfa> ${showWizardMenu && renderTemplate`${renderComponent($$result, "WizardMenuButton", $$WizardMenuButton, { "data-astro-cid-37fxchfa": true })}`} <main data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${showFooter && renderTemplate`${renderComponent($$result, "CastleFooter", $$CastleFooter, { "data-astro-cid-37fxchfa": true })}`} ${renderComponent($$result, "MobileMenuModal", $$MobileMenuModal, { "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "/home/wouter/projects/woutermaas.com/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$WizardMenuButton as a };
