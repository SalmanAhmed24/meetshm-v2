import { NextApiRequest, NextApiResponse } from 'next';

export default function(req, res) {
	console.log(req.body);
	res.json({ status: 'OK' });
	console.log('new branch');
	// var nodemailer = require('nodemailer');

	// var transporter = nodemailer.createTransport({
	// 	service: 'gmail',
	// 	auth: {
	// 		user: 'salman.ahmed.abbasi.24@gmail.com',
	// 		pass: 'lqbpysnbpnnqbbrx'
	// 	}
	// });

	// var mailOptions = {
	// 	from: 'salman.ahmed.abbasi.24@gmail.com',
	// 	to: 'salman.ahmed.abbasi.24@gmail.com',
	// 	subject: 'Sending Email using Node.js',
	// 	text: 'That was easy!'
	// };

	// transporter.sendMail(mailOptions, function(error, info) {
	// 	if (error) {
	// 		console.log(error);
	// 	} else {
	// 		console.log('Email sent: ' + info.response);
	// 		res.json({ status: 'OK' });
	// 	}
	// });
}
