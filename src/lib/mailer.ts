import nodemailer from "nodemailer";

export type MailAttachment = { filename: string; content: Buffer; contentType?: string };

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function sendMail(options: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: MailAttachment[];
}) {
  const transport = getTransport();
  const from = process.env.MAIL_FROM ?? options.to;

  if (!transport) {
    console.info("[mailer] SMTP not configured — logging email instead of sending.\n", {
      to: options.to,
      subject: options.subject,
      text: options.text,
      attachments: options.attachments?.map((file) => `${file.filename} (${file.content.length} octets)`),
    });
    return { delivered: false as const };
  }

  await transport.sendMail({
    from,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    attachments: options.attachments,
  });
  return { delivered: true as const };
}
