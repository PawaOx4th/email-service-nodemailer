const nodemailer = require("nodemailer");

/**
 *  [1]. Configure transporter sender email
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xxxxxx@gmail.com",
    pass: "xxxxxxxxxx",
  },
});

/**
 *  [2]. Configure mail transport Options
 */
let mailOptions = {
  from: "kanpim5@gmail.com", // Sender Email
  to: "pawaox4th@gmail.com", // receiver Email
  subject: "Hello node.js", // Content Header
  html: "<b>Do You Receive this mail?", // Content Body or HTML Body
};

/**
 *  [3]. Set Enable less secure app gmail
 *  link : https://myaccount.google.com/lesssecureapps
 *  Email not Auth 2
 */

/**
 *  [4] Transport Email
 *    .sendMail( mailOptions , callback ) => Method
 */
transporter.sendMail(mailOptions, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

/*********************************************************
 Cr : https://engineering.thinknet.co.th/%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-function-%E0%B8%AA%E0%B9%88%E0%B8%87-email-%E0%B8%9A%E0%B8%99-nodejs-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nodemailer-d254db65a5b7
********************************************************* */
