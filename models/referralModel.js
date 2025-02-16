import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createReferral = async (referralData) => {
  try {
    const referral = await prisma.referral.create({
      data: referralData,
    });
    return referral;
  } catch (error) {
    throw new Error("Error creating referral: " + error.message);
  }
};
