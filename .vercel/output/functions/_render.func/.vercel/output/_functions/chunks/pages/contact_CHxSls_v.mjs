/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_CTereJSx.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './about_Ccqf3-yZ.mjs';
import nodemailer from 'nodemailer';

const $$Astro$1 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead()}<form method="POST" class="w-3/4 md:w-1/2 flex flex-col gap-3 py-10 pb-20"> <input required type="text" name="name" placeholder="YOUR NAME" class="p-5 text-black"> <input required type="email" name="email" placeholder="EMAIL" class="p-5 text-black"> <input type="text" name="company" placeholder="COMPANY" class="p-5 text-black"> <textarea name="message" placeholder="MESSAGE" class="p-5 text-black"></textarea> <button type="submit" class="border-2 border-white py-4 hover:shadow-button hover:shadow-white hover:-translate-x-1 hover:-translate-y-1 transition font-bold rounded-lg focus:translate-x-0 focus:translate-y-0 focus:shadow-none">
SUBMIT
</button> </form>`;
}, "C:/code/wm-website-astro/src/components/ContactForm.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const name = formData.get("name")?.toString();
      const email = formData.get("email")?.toString();
      const company = formData.get("company")?.toString();
      const message = formData.get("message")?.toString();
      const authEmail = "larrybain01@gmail.com";
      const authPassword = "ciig byst ikwu hfnn";
      const transport = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: authEmail,
          pass: authPassword
        }
      });
      const mailOptions = {
        from: email,
        to: authEmail,
        subject: `WM Contact - ${name} from ${company}`,
        text: message
      };
      transport.sendMail(mailOptions, function(err) {
        if (err) {
          return { success: false };
        }
      });
      return Astro2.redirect("/success");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WM Design | Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center flex-grow"> <section class="flex flex-col items-center justify-center pt-20 pb-10 px-5"> <div class="flex flex-col items-center text-center"> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.2s_forwards]">
WE CAN
</b> <b class="text-6xl opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.4s_forwards]">
WORK IT OUT
</b> <p class="w-3/4 text-xl mt-6 px-2 opacity-0 animate-[fadeHover_0.4s_ease-in-out_0.8s_forwards]">
Fill out the form below and we&apos;ll get back to you as soon as possible
</p> </div> </section> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </main> ` })}`;
}, "C:/code/wm-website-astro/src/pages/contact.astro", void 0);
const $$file = "C:/code/wm-website-astro/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
