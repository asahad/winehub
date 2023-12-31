import dotenv from "dotenv";
dotenv.config();
import mailjetPackage from "node-mailjet";

// Configure Mailjet Mail
const mailjetClient = mailjetPackage.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

// Function to send a welcome email
const sendWelcomeEmail = (userEmail, userName) => {
  const emailData = {
    Messages: [
      {
        From: {
          Email: "alhassansahad24@gmail.com", // This is verified that is used for mailjet registration. It must be verified by mailjet
          Name: "Winehub",
        },
        To: [
          {
            Email: userEmail,
            Name: userName,
          },
        ],
        Subject: "Welcome to WineHubSite!",
        TextPart: `Welcome, ${userName}!`,
        HTMLPart: `<h1>Welcome, ${userName}!</h1><p>Thank you for registering with us.</p>`,
      },
    ],
  };

  mailjetClient
    .post("send", { version: "v3.1" })
    .request(emailData)
    .then(() => console.log("Welcome email sent."))
    .catch((error) => console.error("Error sending welcome email:", error));
};

export { sendWelcomeEmail };
