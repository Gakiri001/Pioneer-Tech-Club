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
    res.status(201).json({success:true, event})
  }
  catch(err){
    res.status(500).json({success:false, message:"Server failed"})
  }
}

export const getEvents = async (req,res) => {
  try {
    const eventDetails = await prisma.event.findMany();
    res.status(200).json({success:true, eventDetails})
  } catch (error) {
    res.status(500).json({success:false, message:"Server Failed"})
  }
}