/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as createTransitionScope, i as renderSlot } from '../astro_CTereJSx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { MdArrowRightAlt } from 'react-icons/md';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useEffect } from 'react';
import 'clsx';

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="w-full p-4 flex items-center bg-white text-black"> <a href="/contact" class="flex items-center gap-1 font-bold rounded-xl text-black bg-white px-3 py-2 border-2 border-black transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-button hover:shadow-black focus:translate-x-0 focus:translate-y-0 focus:shadow-none"> <span>
CONTACT US
</span> ${renderComponent($$result, "MdArrowRightAlt", MdArrowRightAlt, { "size": 30 })} </a> </div>`;
}, "C:/code/wm-website-astro/src/components/Footer.astro", void 0);

const isNavOpen = atom(false);

function NavHamburger() {
  const $isNavOpen = useStore(isNavOpen);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => isNavOpen.set(!$isNavOpen),
      className: "md:hidden h-5 w-8 mr-6 mt-4 cursor-pointer z-40 transition ease-in relative group",
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `${$isNavOpen ? "bg-black rotate-45 top-2" : "bg-white top-0"} h-1 w-full rounded-lg transition absolute left-0`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `${$isNavOpen ? "hidden" : "bg-white top-2"} h-1 w-full rounded-lg transition absolute left-0`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `${$isNavOpen ? "bg-black -rotate-45 top-2" : "bg-white top-4"} h-1 w-full rounded-lg transition absolute left-0`
          }
        )
      ]
    }
  );
}

const logo_black = new Proxy({"src":"/_astro/wm_logo_black.WcZTnh8R.png","width":100,"height":144,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/wm-website-astro/public/wm_logo_black.png";
							}
							
							return target[name];
						}
					});

const logo_white = new Proxy({"src":"/_astro/wm_logo_white.D2cnjAVP.png","width":100,"height":147,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/wm-website-astro/public/wm_logo_white.png";
							}
							
							return target[name];
						}
					});

function NavLogo() {
  const $isNavOpen = useStore(isNavOpen);
  useEffect(() => {
    if ($isNavOpen) {
      scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [$isNavOpen]);
  return /* @__PURE__ */ jsx("div", { className: "w-full grid place-items-center absolute top-5 z-30", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: "/",
      className: "px-4 hover:rotate-180 transition duration-200 cursor-pointer",
      children: [
        $isNavOpen && /* @__PURE__ */ jsx(
          "img",
          {
            onClick: () => isNavOpen.set(!$isNavOpen),
            src: logo_black.src,
            alt: "WM Logo Black",
            height: 45,
            width: 45
          }
        ),
        !$isNavOpen && /* @__PURE__ */ jsx(
          "img",
          {
            src: logo_white.src,
            alt: "WM Logo White",
            height: 45,
            width: 45
          }
        )
      ]
    }
  ) });
}

function NavFlyout() {
  const $isNavOpen = useStore(isNavOpen);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-pressed": $isNavOpen,
        className: "w-0 h-0 aria-pressed:h-[200vh] aria-pressed:w-[200vh] transition-all duration-1000 max-w-full md:hidden fixed -right-24 -top-32 bg-white rounded-full z-20 overflow-hidden"
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        "aria-pressed": $isNavOpen,
        className: "hidden md:hidden fixed text-3xl text-right pr-4 top-0 left-0 w-screen h-screen text-black aria-pressed:flex flex-col gap-12 justify-center items-end z-20 overflow-hidden",
        children: [
          /* @__PURE__ */ jsx(
            FlyoutLink,
            {
              title: "SERVICES",
              link: "/services"
            }
          ),
          /* @__PURE__ */ jsx(
            FlyoutLink,
            {
              title: "CLIENTS",
              link: "/clients"
            }
          ),
          /* @__PURE__ */ jsx(
            FlyoutLink,
            {
              title: "ABOUT US",
              link: "/about"
            }
          ),
          /* @__PURE__ */ jsx(
            FlyoutLink,
            {
              title: "CONTACT",
              link: "/contact"
            }
          )
        ]
      }
    )
  ] });
}
function FlyoutLink({ title, link }) {
  const $isNavOpen = useStore(isNavOpen);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      onClick: () => isNavOpen.set(!$isNavOpen),
      href: link,
      className: "relative w-fit group transition py-2 px-1 opacity-0 animate-[fadeIn_0.5s_0.4s_forwards]",
      children: [
        /* @__PURE__ */ jsx("span", { className: "relative group-hover:text-white transition z-10", children: title }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 group-hover:w-full w-0 bg-black h-full transition-all z-0" })
      ]
    }
  );
}

const $$Astro$4 = createAstro();
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { title, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="relative group z-40 px-1 py-1"> <span class="relative group-hover:text-black transition z-10"> ${title} </span> <div class="absolute top-0 left-0 group-hover:w-full w-0 bg-white h-full rounded-sm transition-all z-0"></div> </a>`;
}, "C:/code/wm-website-astro/src/components/NavLink.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex justify-end md:justify-between items-center py-6 font-bold"> <div class="hidden md:flex ml-10 gap-6 xl:ml-14"> ${renderComponent($$result, "NavLink", $$NavLink, { "title": "SERVICES", "link": "/services" })} ${renderComponent($$result, "NavLink", $$NavLink, { "title": "CLIENTS", "link": "/clients" })} ${renderComponent($$result, "NavLink", $$NavLink, { "title": "ABOUT US", "link": "/about" })} </div> ${renderComponent($$result, "NavLogo", NavLogo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/code/wm-website-astro/src/components/NavLogo", "client:component-export": "default" })} ${renderComponent($$result, "NavFlyout", NavFlyout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/code/wm-website-astro/src/components/NavFlyout", "client:component-export": "default" })} <a href="/contact" class="hidden md:block font-semibold rounded-xl text-white bg-black px-3 py-2 mr-10 xl:mr-14 z-40 border-2 border-white transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-button hover:shadow-white focus:translate-x-0 focus:translate-y-0 focus:shadow-none">
CONTACT
</a> ${renderComponent($$result, "NavHamburger", NavHamburger, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/code/wm-website-astro/src/components/NavHamburger", "client:component-export": "default" })} </div>`;
}, "C:/code/wm-website-astro/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/code/wm-website-astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen min-w-screen flex flex-col"> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-transition-persist": createTransitionScope($$result, "hnxvbdwe") })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})} </body></html>`;
}, "C:/code/wm-website-astro/src/layouts/Layout.astro", "self");

const larry_profile = new Proxy({"src":"/_astro/larry_profile.CaET0GWJ.jpg","width":538,"height":575,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/wm-website-astro/public/larry_profile.jpg";
							}
							
							return target[name];
						}
					});

const connor_profile = new Proxy({"src":"/_astro/connor_profile.DJzkchem.jpg","width":407,"height":403,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/code/wm-website-astro/public/connor_profile.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WM Design | About Us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center flex-grow"> <section class="flex flex-col items-center justify-center pt-20 pb-10 px-5"> <div class="flex flex-col items-center text-center mb-20"> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.2s_forwards]">
GET TO
</b> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.4s_forwards]">
KNOW US
</b> <i class="text-xl mt-6 opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.8s_forwards]">
We don&apos;t bite
</i> </div> <div class="flex justify-center items-center flex-wrap text-center gap-x-10 gap-y-5 mb-16"> <img class="rounded-full"${addAttribute(larry_profile.src, "src")} alt="Larry profile photo"${addAttribute(280, "width")}${addAttribute(280, "height")}> <div class="max-w-[350px] flex flex-col items-center gap-2 p-4 border-4 border-white rounded-lg"> <img${addAttribute(30, "width")}${addAttribute(logo_white.src, "src")} alt="WM Logo"> <span class="text-2xl font-bold">
Larry Bain
</span> <i class="text-xl">
Lead Designer and Developer
</i> <span>
After earning a Bachelor&apos;s degree in Computer
                        Science from The University of Queensland in 2023,
                        Larry has thoroughly enjoyed his career in the tech
                        industry.
</span> <span>
His primary passion lies in web development, and he
                        consistently seeks inspiration to expand his design
                        skills.
</span> <img${addAttribute(30, "width")}${addAttribute(logo_white.src, "src")} alt="WM Logo"> </div> </div> <div class="flex justify-center items-center flex-wrap-reverse text-center gap-x-10 gap-y-5"> <div class="max-w-[350px] flex flex-col items-center gap-2 p-4 border-4 border-white rounded-lg"> <img${addAttribute(30, "width")}${addAttribute(logo_white.src, "src")} alt="WM Logo"> <span class="text-2xl font-bold">
Connor Johanson
</span> <i class="text-xl">
Head of Marketing
</i> <span>
In his pursuit of a dual degree in Business and IT,
                        Connor not only delves into the intricacies of
                        technology and management but also demonstrates a
                        natural flair for entrepreneurship.
</span> <span>
With an unwavering commitment to excellence, Connor
                        approaches his studies with a keen eye for
                        innovative solutions and a passion for crafting
                        superior products tailored to meet the unique needs
                        of his clients.
</span> <img${addAttribute(30, "width")}${addAttribute(logo_white.src, "src")} alt="WM Logo"> </div> <img class="rounded-full"${addAttribute(connor_profile.src, "src")} alt="Connor profile photo"${addAttribute(280, "width")}${addAttribute(280, "height")}> </div> </section> </main> ` })}`;
}, "C:/code/wm-website-astro/src/pages/about.astro", void 0);

const $$file = "C:/code/wm-website-astro/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, logo_black as a, about as b, logo_white as l };
