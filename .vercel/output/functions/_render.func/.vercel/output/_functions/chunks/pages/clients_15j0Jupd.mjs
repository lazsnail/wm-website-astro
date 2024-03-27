/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_CTereJSx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './about_Ccqf3-yZ.mjs';

const bongs_logo = new Proxy({"src":"/_astro/bongs_logo.FHupgyV2.png","width":202,"height":72,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/wm-website-astro/public/bongs_logo.png";
							}
							
							return target[name];
						}
					});

const jericho_logo = new Proxy({"src":"/_astro/jericho_logo.C34-Kjnw.png","width":320,"height":84,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/wm-website-astro/public/jericho_logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Clients = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clients;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WM Design | Clients" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center flex-grow"> <div class="flex flex-col items-center text-center my-20"> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.2s_forwards]">
THEY
</b> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.4s_forwards]">
BELIEVED
</b> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.6s_forwards]">
IN US
</b> <i class="w-3/4 text-xl mt-6 px-2 opacity-0 animate-[fadeHover_0.4s_ease-in-out_1s_forwards]">
Check out the proud work we&apos;ve done for our clients
</i> </div> <div class="flex flex-wrap justify-center gap-5 mb-10"> <div class="w-5/6 max-w-[500px] flex flex-col gap-10 justify-between items-center bg-white text-black text-center p-6 rounded-lg"> <img${addAttribute(200, "width")}${addAttribute(bongs_logo.src, "src")} alt="Bong's Donburi logo"> <i class="text-lg">
The best food spot in St. Lucia deserves the best
                    website. We took inspiration from the beautiful
                    aesthetic of the store in creating a stylish and
                    organised website with a touch of Japanese flair.
</i> <a class="w-fit flex gap-2 py-2 px-3 rounded-lg text-white font-semibold bg-black hover:bg-white hover:text-black border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-button hover:shadow-black transition" href="https://bongs-donburi.vercel.app/" target="blank">
Visit Site
</a> </div> <div class="w-5/6 max-w-[500px] flex flex-col gap-10 items-center justify-between bg-white text-black text-center p-6 rounded-lg"> <img${addAttribute(200, "width")}${addAttribute(jericho_logo.src, "src")} alt="Jericho and Co logo"> <i class="text-lg">
Blending professionalism with a touch of tropical flair,
                    this website showcases our client&apos;s commitment to
                    delivering marketing excellence in the heart of North
                    Queensland.
</i> <a class="w-fit flex gap-2 py-2 px-3 rounded-lg text-white font-semibold bg-black hover:bg-white hover:text-black border-2 border-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-button hover:shadow-black transition" href="https://www.jerichoandco.com/" target="blank">
Visit Site
</a> </div> </div> </main> ` })}`;
}, "C:/code/wm-website-astro/src/pages/clients.astro", void 0);

const $$file = "C:/code/wm-website-astro/src/pages/clients.astro";
const $$url = "/clients";

export { $$Clients as default, $$file as file, $$url as url };
