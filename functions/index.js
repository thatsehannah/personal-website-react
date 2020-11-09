const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions = {
  from: "E. Hannah",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.sendMail = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  cors(request, response, () => {
    const { name, email, phone, message } = request.query;
    const firstName = /\s/g.test(name) ? name.split(" ")[0] : name;

    mailOptions = {
      ...mailOptions,
      to: "echannah631@gmail.com",
      subject: "Bro, somebody sent you a message from your website!",
      html: `<p style="font-size: 16px">From: ${name}</p>
             <p style="font-size: 16px">Email: ${email}</p>
             <p style="font-size: 16px">Phone Number: ${phone}</p>
             <p style="font-size: 16px">Message: ${message}</p>
            `,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully!");
      }
    });

    mailOptions = {
      ...mailOptions,
      to: email,
      subject: `A message from Elliot Hannah`,
      html: `<p style="font-size: 16px">Hey ${firstName},</p>
             <p style="font-size: 16px">Thank you for visiting my site! I worked very hard on every aspect of it to showcase my true talents and passions. I hope you were impressed with everything and were able to learn something about me. Building this site was a personal goal of mine and achieving this goal is a huge milestone for me. If you are a recruiter or hiring manager, I hope my site serves as insight to my coding abilities and propels me to becoming a potential team member to your organization.</p>
             <p style="font-size: 16px">I appreciate your message and will respond at my earliest convenience. If you would like to get in contact with me, my email is <a href="mailto:elliotchannah@outlook.com">elliotchannah@outlook.com</a>. Again, thank you, please continue to stay safe, and I hope you have a blessed day!</p>
             <p style="font-size: 16px;">Sincerely,</p>
             <br/>
             <p style="font-size: 16px;">Elliot C. Hannah</p>
             <p style="font-size: 12px; margin-top: -10px;">Full Stack Developer</p>
             <hr />
             <p style="font-size: 12px;"><strong>Phone: </strong><a href="tel:7066317005">(706) 631-7005</a></p>
             <p style="font-size: 12px; margin-top: -5px;"><strong>Email: </strong><a href="mailto:elliotchannah@outlook.com">elliotchannah@outlook.com</a></p>
             <p style="font-size: 12px; margin-top: -5px;"><strong>Website: </strong><a href="https://thatsehannah.com">thatsehannah.com</a></p>
            `,
    };
    transporter.sendMail(mailOptions);
  });
});
