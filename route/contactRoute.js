const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "please fill all the fields" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "guptarajat234@gmail.com",
      pass: "muvzqpigdpalgcas",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "guptarajat234@gmail.com",
    subject: `message from ${data.name}`,
    html: `
    <h3>Information</h3>
   <li>  Email: ${data.email}</li>
    <h3> Message </h3>
    <p> ${data.message} <p/>
    `,
  };
  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please fill all the fields",error });
      res.status(200).json({ msg: "Thank you for contacting me" });
    } catch (error) {
      if (error)
        return res.status(500).json({ msg: "There is a server error" });
    }
  });
});
module.exports = router;