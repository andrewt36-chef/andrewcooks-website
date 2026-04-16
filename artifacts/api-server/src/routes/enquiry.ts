import { Router } from "express";
import { Resend } from "resend";

const router = Router();

const resend = new Resend(process.env.RESEND_API_KEY);
const ANDREW_EMAIL = "hello@hot-rocket.com";
const FROM_ADDRESS = "Andrew Taylor Private Chef <hello@andrewcooks.co.uk>";

const EVENT_TYPE_LABELS: Record<string, string> = {
  "dinner-party": "Private Dinner Party",
  "weekly-chef": "Weekly Chef Service",
  "house-party": "House Party / Holiday",
  "corporate": "Corporate Event",
  "other": "Other",
};

router.post("/enquiry", async (req, res) => {
  const { name, email, phone, eventType, date, guests, message } = req.body;

  if (!name || !email || !eventType || !guests || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const eventLabel = EVENT_TYPE_LABELS[eventType] || eventType;
  const formattedDate = date ? new Date(date).toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "Not specified";

  try {
    // Email to Andrew
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: ANDREW_EMAIL,
      subject: `New Enquiry: ${eventLabel} from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #2c2c2c;">
          <div style="border-bottom: 2px solid #8B6914; padding-bottom: 20px; margin-bottom: 32px;">
            <h1 style="font-size: 28px; margin: 0; color: #1a1a1a;">New Enquiry</h1>
            <p style="margin: 8px 0 0; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; color: #8B6914; font-family: sans-serif;">andrewcooks.co.uk</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; width: 140px; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-size: 16px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-size: 16px;"><a href="mailto:${email}" style="color: #8B6914;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-size: 16px;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Event Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-size: 16px;">${eventLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Date</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-size: 16px;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Guests</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d4; font-size: 16px;">${guests}</td>
            </tr>
          </table>

          <div style="margin-top: 32px;">
            <p style="font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 12px;">Message</p>
            <p style="font-size: 16px; line-height: 1.7; background: #faf8f5; padding: 20px; border-left: 3px solid #8B6914; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e8e0d4; font-family: sans-serif; font-size: 12px; color: #aaa;">
            Sent from andrewcooks.co.uk
          </div>
        </div>
      `,
    });

    // Auto-reply to the enquirer
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: `Thank you for your enquiry, ${name.split(" ")[0]}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #2c2c2c;">
          <div style="border-bottom: 2px solid #8B6914; padding-bottom: 20px; margin-bottom: 32px;">
            <h1 style="font-size: 28px; margin: 0; color: #1a1a1a;">Andrew Taylor</h1>
            <p style="margin: 8px 0 0; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; color: #8B6914; font-family: sans-serif;">Private Chef · Clavering, Essex</p>
          </div>

          <p style="font-size: 18px; line-height: 1.7;">Dear ${name.split(" ")[0]},</p>

          <p style="font-size: 16px; line-height: 1.8; color: #444;">Thank you for getting in touch. I've received your enquiry about a <strong>${eventLabel}</strong> and will review the details shortly.</p>

          <p style="font-size: 16px; line-height: 1.8; color: #444;">I aim to respond to all enquiries within 24 hours. In the meantime, if you have any urgent questions, please feel free to call me directly.</p>

          <div style="background: #faf8f5; border-left: 3px solid #8B6914; padding: 20px 24px; margin: 32px 0;">
            <p style="margin: 0 0 8px; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Your enquiry summary</p>
            <p style="margin: 4px 0; font-size: 15px;"><strong>Event:</strong> ${eventLabel}</p>
            <p style="margin: 4px 0; font-size: 15px;"><strong>Date:</strong> ${formattedDate}</p>
            <p style="margin: 4px 0; font-size: 15px;"><strong>Guests:</strong> ${guests}</p>
          </div>

          <p style="font-size: 16px; line-height: 1.8; color: #444;">I look forward to speaking with you soon.</p>

          <p style="font-size: 16px; margin-top: 32px;">Warmly,<br><strong>Andrew Taylor</strong></p>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e8e0d4; font-family: sans-serif; font-size: 13px; color: #888;">
            <p style="margin: 4px 0;">hello@hot-rocket.com &nbsp;·&nbsp; +44 (0) 7547 393371</p>
            <p style="margin: 4px 0;">andrewcooks.co.uk</p>
          </div>
        </div>
      `,
    });

    res.json({ success: true, message: "Enquiry sent successfully" });
  } catch (err) {
    req.log.error({ err }, "Failed to send enquiry email");
    res.status(500).json({ error: "Failed to send enquiry. Please try again or contact us directly." });
  }
});

export default router;
