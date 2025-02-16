import { createReferral } from "../models/referralModel.js";

export const createReferralHandler = async (req, res) => {
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
    return res
      .status(201)
      .json({ message: "Referral created successfully!", referral });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
