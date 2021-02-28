//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  console.log(req);
  const sendMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "yourEmail@email.com",
        pass: "yourPassword",
      },
    });
    const mailOptions = {
      from: `"Baptiste LE GALL", "baptiste.le.galll@gmail.com"`,
      to: `legallbapt@eisti.eu`,
      subject: "Email de mise en contact",
      html:
        "<h1>Bonjour " +
        user.Fullname +
        "</h1> <br> Nous avons bien reçu votre demande de contact. <br> Nous reviendrons vers vous bientôt !",
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, callback);
  };

  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});
