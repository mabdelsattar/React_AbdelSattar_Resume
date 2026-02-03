# Running the local email server

This project includes a small Express server that exposes a POST `/send-email` endpoint. The server uses Nodemailer to forward messages to the recipient email `mabdelsattar92@gmail.com`.

Security: the server uses environment variables for the Gmail account and password. For Gmail, create an App Password (recommended) and set it as `GMAIL_PASS`.

Steps

1. Install dependencies

```bash
cd server
npm install
```

2. Set environment variables (create a `.env` file in `server/`):

```
GMAIL_USER=your@gmail.com
GMAIL_PASS=your_app_password
PORT=5000
```

3. Start the server

```bash
npm start
```

4. Update the client if you deploy the server elsewhere. The client currently posts to `http://localhost:5000/send-email`.

Notes
- Using Gmail requires either an App Password or OAuth2. App Passwords are simpler for testing.
- Do not commit `.env` to version control.
