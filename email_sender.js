// npm install nodemailer
//import nodemailer
var nodemailer = require('nodemailer');

//sending mail
var transporter = nodemailer.createTransport({
  service: 'proton',
  auth: {
    user: 'aweadewumie@gmail.com',
    pass: '160520@mode'
  }
});

var mailOptions = {
  from:  'aweadewumie@gmail.com',
  to: 'e.adewumiawe@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});