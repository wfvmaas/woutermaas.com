globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, k as renderScript, b as renderTemplate } from './astro/server_Bs7vdGkE.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$ScrollIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ScrollIndicator;
  const { color = "currentColor", scale = 1, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="scroll-indicator"${addAttribute(target, "data-target")}${addAttribute(`--scale: ${scale}; --color: ${color};`, "style")} data-astro-cid-7ivj2o3m> <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7ivj2o3m> <path d="M12 5v14M19 12l-7 7-7-7" data-astro-cid-7ivj2o3m></path> </svg> </div>  ${renderScript($$result, "/home/wouter/projects/woutermaas.com/src/components/ScrollIndicator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wouter/projects/woutermaas.com/src/components/ScrollIndicator.astro", void 0);

export { $$ScrollIndicator as $ };
