/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_CTereJSx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { l as logo_white, a as logo_black, $ as $$Layout } from './about_Ccqf3-yZ.mjs';
/* empty css                          */

const dino = new Proxy({"src":"/_astro/dino.DBaIEE1a.gif","width":480,"height":432,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/wm-website-astro/public/dino.gif";
							}
							
							return target[name];
						}
					});

const cursors = new Proxy({"src":"/_astro/cursors.BYuZJPoG.gif","width":500,"height":500,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/wm-website-astro/public/cursors.gif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WM Design | Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <section class="h-fit flex flex-col items-center justify-center mt-16 mb-24 text-center" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold opacity-0 animate-[fadeHover_0.4s_ease-in-out_forwards] mb-1 tracking-wider" data-astro-cid-j7pv25f6>
WELCOME TO
</h2> <h1 class="text-6xl w-11/12 font-extrabold opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.4s_forwards] mb-4" data-astro-cid-j7pv25f6>
WM DESIGN
</h1> <h3 class="hidden md:block text-center tracking-wide" data-astro-cid-j7pv25f6> <div class="pt-2 text-2xl opacity-0 animate-[fadeHover_0.5s_ease-in-out_0.8s_forwards]" data-astro-cid-j7pv25f6>
A boutique web design agency
</div> <div class="text-2xl opacity-0 animate-[fadeHover_0.5s_ease-in-out_0.9s_forwards]" data-astro-cid-j7pv25f6>
dedicated to advancing businesses
</div> <div class="text-2xl opacity-0 animate-[fadeHover_0.5s_ease-in-out_1s_forwards]" data-astro-cid-j7pv25f6>
in the modern era.
</div> </h3> <h3 class="md:hidden w-3/4 text-center text-2xl opacity-0 animate-[fadeHover_0.5s_ease-in-out_0.8s_forwards] tracking-normal" data-astro-cid-j7pv25f6>
A boutique web design agency dedicated to advancing businesses in the modern era.
</h3> <div class="w-11/12 mt-14 flex gap-4 flex-col items-center" data-astro-cid-j7pv25f6> <div class="hide w-full rounded-lg transition duration-1000 ease-out" data-astro-cid-j7pv25f6> <img${addAttribute(cursors.src, "src")} alt="Cursor animation" class="gif rounded-lg" data-astro-cid-j7pv25f6> </div> <div class="w-full hide flex justify-between items-center gap-6 md:gap-24 border-2 border-white px-6 md:px-8 py-12 rounded-lg transition duration-1000 ease-out" data-astro-cid-j7pv25f6> <img${addAttribute(logo_white.src, "src")} alt="WM Logo" class="w-10" data-astro-cid-j7pv25f6> <p class="italic text-2xl tracking-wide" data-astro-cid-j7pv25f6>
Find out how we can boost your business
</p> <img${addAttribute(logo_white.src, "src")} alt="WM Logo" class="w-10" data-astro-cid-j7pv25f6> </div> <img${addAttribute(dino.src, "src")} alt="Dinosour running" class="gif hide rounded-lg transition duration-1000 ease-out" data-astro-cid-j7pv25f6> <div class="w-full hide flex justify-between items-center gap-6 md:gap-24 border-2 bg-white text-black font-semibold px-6 md:px-8 py-12 rounded-lg transition duration-1000 ease-out" data-astro-cid-j7pv25f6> <img${addAttribute(logo_black.src, "src")} alt="WM Logo" class="w-10" data-astro-cid-j7pv25f6> <p class="italic text-2xl tracking-wide" data-astro-cid-j7pv25f6>
Making websites for today and tomorrow
</p> <img${addAttribute(logo_black.src, "src")} alt="WM Logo" class="w-10" data-astro-cid-j7pv25f6> </div> </div> </section> </main> ` })}  `;
}, "C:/code/wm-website-astro/src/pages/index.astro", void 0);

const $$file = "C:/code/wm-website-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
