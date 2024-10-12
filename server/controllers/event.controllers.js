import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createEvent = async (req, res) => {
  try {
    const { title, description, trainer, date, time, venue } = req.body;

    const event = await prisma.event.create({
      data: {
        title: title,
        description: description,
        trainer: trainer,
        date: new Date(date),
        time: time,
        venue: venue,
      },
      select: {
        id: true,
        title: true,
        description: true,
        trainer: true,
        date: true,
        time: true,
        venue: true,
      },
    });
    res.status(201).json({ success: true, event });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server failed" });
  }
};

export const getEvents = async (req, res) => {
  try {
    const eventDetails = await prisma.event.findMany();
    res.status(200).json({ success: true, eventDetails });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Failed" });
  }
};

export const updateEvent = async (req, res) => {
  const { title, description, trainer, date, time, venue } = req.body;
  const id = req.params.id;
  try {
    let updateEventinfo;
    if (title) {
      updateEventinfo = await prisma.event.update({
        where: { id: id },
        data: { title: title },
      });
    }
    if (description) {
      updateEventinfo = await prisma.event.update({
        where: { id: id },
        data: { description: description },
      });
    }
    if (trainer) {
      updateEventinfo = await prisma.event.update({
        where: { id: id },
        data: { trainer: trainer },
      });
    }
    if (date) {
      updateEventinfo = await prisma.event.update({
        where: { id: id },
        data: { date: date },
      });
    }
    if (time) {
      updateEventinfo = await prisma.event.update({
        where: { id: id },
        data: { time: time },
      });
    }
    if (venue) {
      updateEventinfo = await prisma.event.update({
        where: { id: id },
        data: { venue: venue },
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    let deleteEventinfo = await prisma.event.delete({
      where: { id: id },
      select: {
        title: true,
        description: true,
        trainer: true,
        date: true,
        time: true,
        venue: true,
      },
    });
    res
      .status(200)
      .json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
