const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post('/send-email', async (req, res) => {
  const { email, subject, body } = req.body;
  if (!email || !subject || !body) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const mailOptions = {
    from: email,
    to: 'mabdelsattar92@gmail.com',
    subject,
    text: `From: ${email}\n\n${body}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ ok: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Email server listening on port ${PORT}`));
