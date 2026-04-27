import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@biedronkapoconos.com";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "dannybzura@gmail.com";

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

function adminNotificationHtml(d: ContactData): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0E1622">
      <div style="background:#0E1622;padding:28px 32px">
        <h1 style="color:#E8B4B3;margin:0;font-size:20px;letter-spacing:0.04em">Biedronka Deli</h1>
        <p style="color:rgba(243,236,223,0.5);margin:6px 0 0;font-size:12px">New contact form submission</p>
      </div>
      <div style="padding:36px 32px;background:#FAF6EE;border:1px solid #e8e0d0">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:10px 0;color:#6B7482;border-bottom:1px solid #e8e0d0;width:120px">Name</td>
            <td style="padding:10px 0;font-weight:600;border-bottom:1px solid #e8e0d0">${d.name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6B7482;border-bottom:1px solid #e8e0d0">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d0"><a href="mailto:${d.email}" style="color:#C23535">${d.email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6B7482;border-bottom:1px solid #e8e0d0">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d0">${d.phone ?? "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6B7482;border-bottom:1px solid #e8e0d0">Inquiry</td>
            <td style="padding:10px 0;font-weight:600;border-bottom:1px solid #e8e0d0;color:#C23535">${d.service}</td>
          </tr>
        </table>
        <div style="margin-top:24px">
          <p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6B7482;margin:0 0 10px">Message</p>
          <p style="margin:0;line-height:1.7;font-size:14px">${d.message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
      <div style="background:#0E1622;padding:20px 32px;text-align:center">
        <p style="color:rgba(243,236,223,0.35);font-size:12px;margin:0">Biedronka Deli · 354 N 9th St, Stroudsburg, PA</p>
      </div>
    </div>
  `;
}

function userConfirmationHtml(d: ContactData): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0E1622">
      <div style="background:#0E1622;padding:28px 32px">
        <h1 style="color:#E8B4B3;margin:0;font-size:20px;letter-spacing:0.04em">Biedronka Deli</h1>
        <p style="color:rgba(243,236,223,0.5);margin:6px 0 0;font-size:12px">Stroudsburg, PA</p>
      </div>
      <div style="padding:40px 32px;background:#FAF6EE;border:1px solid #e8e0d0">
        <h2 style="font-size:20px;margin:0 0 8px;color:#0E1622">We got your message!</h2>
        <p style="color:#6B7482;margin:0 0 28px;font-size:14px;line-height:1.6">
          Hi ${d.name}, thanks for reaching out to Biedronka Deli. We&apos;ll get back to you as soon as we can.
        </p>
        <div style="background:#fff;border:1px solid #e8e0d0;padding:20px 24px;margin-bottom:28px">
          <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6B7482">Inquiry Type</p>
          <p style="margin:0;font-size:16px;font-weight:600;color:#C23535">${d.service}</p>
        </div>
        <p style="font-size:13px;color:#6B7482;line-height:1.6;margin:0">
          You can also reach us by phone at
          <a href="tel:+15707304464" style="color:#C23535;font-weight:600">(570) 730-4464</a>
          or stop in at 354 N 9th St, Stroudsburg, PA.
        </p>
      </div>
      <div style="background:#0E1622;padding:20px 32px;text-align:center">
        <p style="color:rgba(243,236,223,0.35);font-size:12px;margin:0">&copy; ${new Date().getFullYear()} Biedronka Deli · Stroudsburg, PA</p>
      </div>
    </div>
  `;
}

export async function sendContactNotification(data: ContactData) {
  if (!resend) {
    console.log("[DEV EMAIL] Contact notification →", ADMIN_EMAIL, data);
    return;
  }
  await resend.emails.send({
    from: `Biedronka Deli <${FROM}>`,
    to: ADMIN_EMAIL,
    replyTo: data.email,
    subject: `New Inquiry: ${data.service} — ${data.name}`,
    html: adminNotificationHtml(data),
  });
}

export async function sendContactConfirmation(data: ContactData) {
  if (!resend) {
    console.log("[DEV EMAIL] Contact confirmation →", data.email, data);
    return;
  }
  await resend.emails.send({
    from: `Biedronka Deli <${FROM}>`,
    to: data.email,
    subject: "We received your message — Biedronka Deli",
    html: userConfirmationHtml(data),
  });
}
