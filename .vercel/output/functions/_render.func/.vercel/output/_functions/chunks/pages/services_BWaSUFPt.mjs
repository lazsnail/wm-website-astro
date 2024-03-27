/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro_CTereJSx.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { l as logo_white, a as logo_black, $ as $$Layout } from './about_Ccqf3-yZ.mjs';

const $$Astro$1 = createAstro();
const $$ContentItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentItem;
  const { heading, subheading, theme } = Astro2.props;
  const logo = theme == "black" ? logo_white : logo_black;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(
    `${theme === "white" ? "bg-white text-black" : "bg-black text-white border-4 border-white "} 
            max-w-[300px] flex flex-col items-center justify-between cursor-default p-4 gap-3 text-center rounded-xl hover:scale-110 transition`,
    "class"
  )}> <img${addAttribute(30, "width")}${addAttribute(logo.src, "src")} alt="WM logo"> <h2 class="font-bold text-2xl">${heading}</h2> <i>${subheading}</i> <img${addAttribute(30, "width")}${addAttribute(logo.src, "src")} alt="WM logo"> </div>`;
}, "C:/code/wm-website-astro/src/components/ContentItem.astro", void 0);

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WM Design | Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center flex-grow"> <div class="flex flex-col items-center text-center my-20 tracking-wider leading-10"> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.2s_forwards]">
WE MAKE
</b> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.4s_forwards]">
WEBSITES
</b> <i class="text-xl mt-6 opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.8s_forwards] tracking-wider">
If you didn&apos;t already know
</i> </div> <div class="flex flex-wrap justify-center gap-5 mb-10"> ${renderComponent($$result2, "ContentItem", $$ContentItem, { "heading": "Custom Websites", "subheading": "Tailored websites reflecting your unique brand identity.", "theme": "white" })} ${renderComponent($$result2, "ContentItem", $$ContentItem, { "heading": "Responsive Layouts", "subheading": "Ensuring a seamless user experience on all devices.", "theme": "black" })} ${renderComponent($$result2, "ContentItem", $$ContentItem, { "heading": "Intuitive Navigation", "subheading": "User-friendly interfaces for easy exploration.", "theme": "white" })} ${renderComponent($$result2, "ContentItem", $$ContentItem, { "heading": "SEO Integration", "subheading": "Implementing strategies for enhanced search engine visibility.", "theme": "black" })} ${renderComponent($$result2, "ContentItem", $$ContentItem, { "heading": "E-commerce Solutions", "subheading": "Building secure and efficient online stores.", "theme": "white" })} ${renderComponent($$result2, "ContentItem", $$ContentItem, { "heading": "Collaborative Process", "subheading": "Involving you at every stage to ensure the perfect result.", "theme": "black" })} ${renderComponent($$result2, "ContentItem", $$ContentItem, { "heading": "Regular Updates and Maintenance", "subheading": "Keeping your website current and functional.", "theme": "white" })} </div> </main> ` })}`;
}, "C:/code/wm-website-astro/src/pages/services.astro", void 0);

const $$file = "C:/code/wm-website-astro/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
