import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createEvent = async (req,res) => {
  try{
    const{title,description, trainer, date, time, venue} = req.body

    const event = await prisma.event.create({
      data: {
        title: title,
        description: description,
        trainer: trainer,
        date: new Date (date),
        time: time,
        venue: venue, 
      },
      select:{
        id:true,
        title:true,
        description:true,
        trainer:true,
        date: true,
        time: true,
        venue: true, 
      },
    })
    res.status(201).json({success:true, message: "event created successfully"})
  }
  catch(err){
    res.status(500).json({success:false, message:"Server failed"})
  }
}