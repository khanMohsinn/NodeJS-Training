var nodemailer = require("nodemailer");
import("dotenv/config");

const nodeMailer = (email) => {
	var transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		auth: {
			user: process.env.EMAIL_FROM,
			pass: process.env.MY_PSWD,
		},
		// logger: true,
	});

	var mailOptions = {
		from: process.env.EMAIL_FROM,
		to: email,
		subject: "Test email for api test",
		text: "This is a test mail",
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports = nodeMailer;
