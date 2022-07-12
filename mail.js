const express = require("express")
const app = express()
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const path = require('path')
const cors = require("cors")

app.use(bodyParser.urlencoded({
  extended: false
}));

const port = process.env.PORT || 5000

app.use(cors())
app.set("view engine", "ejs")

app.use(express.static(__dirname + '/public'));
app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile("index.html")
})





app.post("/", (req, res) => {

  let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'admiral_akainu@outlook.com',
      pass: 'marinehq1991'
    }
  });
  
  let mailOptions = {
    from: 'admiral_akainu@outlook.com',
    to: 'eams220891@gmail.com',
    subject: req.body.subject,
    text: `hey bro ${req.body.name}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      res.send(`<script>alert("Email Sent Successfully.")</script>`);
    }
  })
  res.redirect("/#contactSection")
});

app.listen(port, () => console.log("Listening to port 5000"))