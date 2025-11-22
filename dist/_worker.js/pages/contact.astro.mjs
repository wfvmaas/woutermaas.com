globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bs7vdGkE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C_wNZIl4.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contact-page" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Get in Touch</h1> <p class="intro" data-astro-cid-uw5kdbxl>
Interested in collaborating or just want to say hi? Drop me a line.
</p> <form class="contact-form" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="name" data-astro-cid-uw5kdbxl>Name</label> <input type="text" id="name" name="name" placeholder="Your name" data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl>Email</label> <input type="email" id="email" name="email" placeholder="you@example.com" data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="message" data-astro-cid-uw5kdbxl>Message</label> <textarea id="message" name="message" rows="6" placeholder="Tell me about your project..." data-astro-cid-uw5kdbxl></textarea> </div> <button type="submit" class="submit-button" data-astro-cid-uw5kdbxl> Send Message </button> </form> </div> ` })} `;
}, "/home/wouter/projects/woutermaas.com/src/pages/contact.astro", void 0);

const $$file = "/home/wouter/projects/woutermaas.com/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
