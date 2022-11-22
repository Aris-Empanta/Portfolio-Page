const express = require("express")
const app = express()
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const cors = require("cors")
const dotenv = require('dotenv').config()

app.use(bodyParser.urlencoded({
  extended: false
}));

const port = process.env.PORT || 5002

app.use(cors())
app.set("view engine", "ejs")

app.use(express.static(__dirname + '/public'));
app.use(express.json())

app.get("/", (req, res) => {
  try{
  res.sendFile("index.html") 
} catch(err) {
  console.log(err)
}
})

app.post("/", (req, res) => {

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS
    }
  });
  
  let mailOptions = {
    from: process.env.MAIL,
    to: 'eams220891@gmail.com',
    subject: req.body.subject,
    html: `Hello! I am ${req.body.name} ! <br>
          &nbsp;&nbsp; <b>email</b>: ${ req.body.email } <br>         
          &nbsp;&nbsp; <b>Message</b>: ${req.body.message} <br>`
  };

  transporter.sendMail(mailOptions)
  res.sendStatus(204)
});

app.listen(port, () => console.log("Listening to port 5000"))