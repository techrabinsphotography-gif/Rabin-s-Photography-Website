import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, phone, email, message } = req.body;

  // Validate inputs
  if (!name || !phone || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all fields'
    });
  }

  try {
    // Configure Brevo API
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = `New Contact Form Submission from ${name}`;
    sendSmtpEmail.htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
                <div style="background: linear-gradient(to right, #10b981, #059669); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                </div>
                <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
                    <div style="margin-bottom: 20px;">
                        <p style="color: #6b7280; margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                        <p style="color: #111827; margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">${name}</p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <p style="color: #6b7280; margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                        <p style="color: #111827; margin: 5px 0 0 0; font-size: 16px;">
                            <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                        </p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <p style="color: #6b7280; margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</p>
                        <p style="color: #111827; margin: 5px 0 0 0; font-size: 16px;">
                            <a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a>
                        </p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <p style="color: #6b7280; margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                        <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 5px;">
                            <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                        <p style="color: #9ca3af; font-size: 12px; margin: 0; text-align: center;">
                            Sent from Rabin's Photography Contact Form
                        </p>
                    </div>
                </div>
            </div>
        `;
    sendSmtpEmail.sender = {
      name: "Rabin's Photography Website",
      email: "noreply@rabinsphotography.com"
    };
    sendSmtpEmail.to = [{
      email: "rabinsphotography@gmail.com",
      name: "Rabin's Photography"
    }];
    sendSmtpEmail.replyTo = {
      email: email,
      name: name
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
}
