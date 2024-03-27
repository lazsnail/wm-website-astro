
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export async function handleSubmit(formData: FormData) {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const company = formData.get("company")?.toString();
    const message = formData.get("message")?.toString();

    const transport = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: email,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: `WM Contact - ${name} from ${company}`,
        text: message,
    };

    transport.sendMail(mailOptions, function (err) {
        if (err) {
            return { success: false }
        }
    });    
};