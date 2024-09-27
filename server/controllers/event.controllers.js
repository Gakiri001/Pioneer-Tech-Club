import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createEvent = async (req,res) => {
  try{
    const{title,description, trainer, date, time, venue} = req.body
  }
  catch(err){
    res.status(500).json({success:false, message:"Server failed"})
  }
}