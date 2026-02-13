import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validate email
  if (!email || !email.includes('@')) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  try {
    // Configure Brevo API
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = `New Newsletter Subscription`;
    sendSmtpEmail.htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
                <div style="background: linear-gradient(to right, #ff4f5a, #ff6b39); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">🎉 New Newsletter Subscriber</h1>
                </div>
                <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
                    <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
                        A new user has subscribed to your newsletter!
                    </p>
                    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="color: #6b7280; margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email Address</p>
                        <p style="color: #111827; margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">
                            <a href="mailto:${email}" style="color: #ff4f5a; text-decoration: none;">${email}</a>
                        </p>
                    </div>
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                        <p style="color: #9ca3af; font-size: 12px; margin: 0; text-align: center;">
                            Subscribed from Rabin's Photography Blog
                        </p>
                    </div>
                </div>
            </div>
        `;
    sendSmtpEmail.sender = {
      name: "Rabin's Photography Website",
      email: "rabinsphotography@gmail.com"
    };
    sendSmtpEmail.to = [{
      email: "rabinsphotography@gmail.com",
      name: "Rabin's Photography"
    }];

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again later.'
    });
  }
}
