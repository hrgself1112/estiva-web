import nodemailer from "nodemailer";

const email = 'mailto:sales@scientificedge.co.in';
const pass = 'riturupesh@11';

export const transporter = nodemailer.createTransport({
  // service: "gmail",
  host : 'noida01.rocketdns.net',
  port :465,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
