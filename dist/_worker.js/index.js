globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CrROjQWI.mjs';
import { manifest } from './manifest_cE-NJj8X.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/art/_slug_.astro.mjs');
const _page2 = () => import('./pages/art.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/cv.astro.mjs');
const _page5 = () => import('./pages/hiking/_slug_.astro.mjs');
const _page6 = () => import('./pages/hiking.astro.mjs');
const _page7 = () => import('./pages/philosophy/_slug_.astro.mjs');
const _page8 = () => import('./pages/philosophy.astro.mjs');
const _page9 = () => import('./pages/software/_slug_.astro.mjs');
const _page10 = () => import('./pages/software.astro.mjs');
const _page11 = () => import('./pages/storytelling/_slug_.astro.mjs');
const _page12 = () => import('./pages/storytelling.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/@astrojs+cloudflare@12.6.11_@types+node@24.10.1_astro@5.16.0_@types+node@24.10.1_less@4_6435dd457fb4a9c32e75dae7de1b3841/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/art/[slug].astro", _page1],
    ["src/pages/art.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/cv.astro", _page4],
    ["src/pages/hiking/[slug].astro", _page5],
    ["src/pages/hiking.astro", _page6],
    ["src/pages/philosophy/[slug].astro", _page7],
    ["src/pages/philosophy.astro", _page8],
    ["src/pages/software/[slug].astro", _page9],
    ["src/pages/software/index.astro", _page10],
    ["src/pages/storytelling/[slug].astro", _page11],
    ["src/pages/storytelling.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
