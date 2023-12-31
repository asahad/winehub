

const sendWelcomeEmail = (userEmail, userName) => {
  let mailOptions = {
    from: 'your-email@gmail.com',
    to: userEmail,
    subject: 'Welcome to Our E-Commerce Site!',
    html: `<h1>Welcome, ${userName}!</h1><p>Thank you for registering with us.</p>`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
