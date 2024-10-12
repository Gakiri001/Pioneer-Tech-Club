import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const validateEventInfo = async (req, res, next) => {
  const { title, description, trainer, date, time, venue } = req.body;
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "The title is required" });
  if (!description)
    return res
      .status(400)
      .json({ success: false, message: "The description is required" });
  if (!trainer)
    return res
      .status(400)
      .json({ success: false, message: "The trainer name is required" });
  if (!date)
    return res
      .status(400)
      .json({ success: false, message: "The date is required" });
  if (!time)
    return res
      .status(400)
      .json({ success: false, message: "The time is required" });
  if (!venue)
    return res
      .status(400)
      .json({ success: false, message: "The venue is required" });
  next();
};
