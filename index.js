import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";


const prisma = new PrismaClient();


const app = express();


app.use(cors());
app.use(bodyParser.json());


const createReferral = async (referralData) => {
  try {
    const referral = await prisma.referral.create({
      data: referralData,
    });
    return referral;
  } catch (error) {
    throw new Error("Error creating referral: " + error.message);
  }
};

// Referral handler
const createReferralHandler = async (req, res) => {
  const { yourName, friendsName, friendsEmail, friendsPhone, course } =
    req.body;

  if (!yourName || !friendsName || !friendsEmail || !friendsPhone || !course) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const referralData = {
    yourName,
    friendsName,
    friendsEmail,
    friendsPhone,
    course,
  };

  try {
    const referral = await createReferral(referralData);

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: friendsEmail,
      subject: "Referral for Course",
      text: `Hello ${friendsName},\n\n${yourName} has referred you for the ${course} course. Best regards, ${yourName}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Email sent: " + info.response);
    });

    return res.status(201).json({
      message: "Referral created and email sent successfully!",
      referral,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

app.post("/api/referral", createReferralHandler);


app.get("/", (req, res) => {
  res.send("Welcome to the Referral API");
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
