var express = require("express");
var router = express.Router();
const nodeMailer = require("../utility/nodemailer");
import("dotenv/config");
/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

// router.post("/", (req, res) => {
// 	let { text, to } = req.body;
// 	const transport = nodemailer.createTransport({
// 		service: "gmail",
// 		host: "smtp.gmail.com",
// 		auth: {
// 			user: "mohsink607@gmail.com",
// 			pass: "MfBwbo@2cc",
// 		},
// 	});
// 	const mailOptions = {
// 		from: "mohsink607@gmail.com",
// 		to,
// 		subject: "Sending Email using Node.js[nodemailer]",
// 		html: `<div className="email" style="
//     border: 1px solid black;
//     padding: 20px;
//     font-family: sans-serif;
//     line-height: 2;
//     font-size: 20px
//     ">
//     <h2>Here is your mail!</h2>
//     <p> ${text}</p>
//     <p>All the best, Ieshan</p>
//      </div>`,
// 	};
// 	transport.sendMail(mailOptions, function (error, info) {
// 		if (error) {
// 			console.log(error);
// 		} else {
// 			res.sendStatus(200);
// 		}
// 	});
// });

router.post("/", async (req, res) => {
	const { email } = req.body;
	try {
		nodeMailer(email);
		res.send("Mail has been sent");
	} catch (error) {
		console.log(error);
		res.send("Mail not sent");
	}
});

module.exports = router;
