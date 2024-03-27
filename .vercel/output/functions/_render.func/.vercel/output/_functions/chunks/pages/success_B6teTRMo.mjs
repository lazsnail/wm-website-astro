/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CTereJSx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './about_Ccqf3-yZ.mjs';

const $$Astro = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WM Design | Successfully submitted enquiry" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center flex-grow"> <section class="flex flex-col items-center justify-center pt-20 pb-10 px-5"> <div class="flex flex-col items-center text-center"> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.2s_forwards]">
THANKS FOR
</b> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.4s_forwards]">
REACHING OUT
</b> <p class="w-3/4 text-xl mt-6 px-2 opacity-0 animate-[fadeHover_0.2s_ease-in-out_1s_forwards]">
We'll get back to you as soon as possible
</p> </div> </section> <a href="/" class="font-semibold rounded-xl text-white bg-black px-3 py-2 border-2 border-white hover:text-white hover:bg-black transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-button hover:shadow-white opacity-0 animate-[fadeIn_0.2s_ease-in-out_1.2s_forwards]">
HOME
</a> </main> ` })}`;
}, "C:/code/wm-website-astro/src/pages/success.astro", void 0);

const $$file = "C:/code/wm-website-astro/src/pages/success.astro";
const $$url = "/success";

export { $$Success as default, $$file as file, $$url as url };
