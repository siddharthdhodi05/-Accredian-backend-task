import express from "express";
import { createReferralHandler } from "../controllers/referralController.js";

const router = express.Router();

router.post("/referral", createReferralHandler);

export default router;
