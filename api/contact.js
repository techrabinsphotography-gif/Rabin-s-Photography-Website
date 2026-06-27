import https from 'https';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, phone, email, message } = req.body || {};

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields' });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY env variable is missing');
    return res.status(500).json({ success: false, message: 'Server configuration error' });
  }

  const htmlContent = `
    <!DOCTYPE html><html><head><meta charset="UTF-8"/></head><body>
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9fafb;border-radius:10px;">
      <div style="background:linear-gradient(135deg,#ff4f5a,#ff8c42);padding:30px;border-radius:10px 10px 0 0;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:24px;">New Contact Form Message</h1>
        <p style="color:rgba(255,255,255,.85);margin:8px 0 0;font-size:14px;">rabinsphotography.com</p>
      </div>
      <div style="background:#fff;padding:30px;border-radius:0 0 10px 10px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
            <p style="color:#6b7280;margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Name</p>
            <p style="color:#111827;margin:4px 0 0;font-size:16px;font-weight:bold;">${name}</p>
          </td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
            <p style="color:#6b7280;margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
            <p style="color:#111827;margin:4px 0 0;font-size:16px;">
              <a href="mailto:${email}" style="color:#ff4f5a;text-decoration:none;">${email}</a>
            </p>
          </td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
            <p style="color:#6b7280;margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Phone</p>
            <p style="color:#111827;margin:4px 0 0;font-size:16px;">
              <a href="tel:${phone}" style="color:#ff4f5a;text-decoration:none;">${phone}</a>
            </p>
          </td></tr>
          <tr><td style="padding:12px 0;">
            <p style="color:#6b7280;margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message</p>
            <div style="background:#f9fafb;padding:14px;border-radius:8px;margin-top:8px;border-left:3px solid #ff4f5a;">
              <p style="color:#374151;margin:0;line-height:1.7;white-space:pre-wrap;">${message}</p>
            </div>
          </td></tr>
        </table>
        <p style="color:#9ca3af;font-size:12px;margin:24px 0 0;text-align:center;">
          Sent from rabinsphotography.com contact form
        </p>
      </div>
    </div></body></html>
  `;

  const payload = JSON.stringify({
    sender: { name: "Rabin's Photography Website", email: 'noreply@rabinsphotography.com' },
    to: [{ email: 'rabinsphotography@gmail.com', name: "Rabin's Photography" }],
    replyTo: { email, name },
    subject: `New Contact Message from ${name}`,
    htmlContent,
  });

  await new Promise((resolve, reject) => {
    const apiReq = https.request(
      {
        hostname: 'api.brevo.com',
        path: '/v3/smtp/email',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      (apiRes) => {
        let data = '';
        apiRes.on('data', (chunk) => (data += chunk));
        apiRes.on('end', () => {
          if (apiRes.statusCode >= 200 && apiRes.statusCode < 300) {
            resolve(data);
          } else {
            reject(new Error(`Brevo error ${apiRes.statusCode}: ${data}`));
          }
        });
      }
    );
    apiReq.on('error', reject);
    apiReq.setTimeout(15000, () => apiReq.destroy(new Error('Brevo API timeout')));
    apiReq.write(payload);
    apiReq.end();
  });

  return res.status(200).json({ success: true, message: 'Message sent successfully!' });
}
