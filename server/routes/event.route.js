import {Router} from "express"
import { createEvent,getEvents,updateEvent,deleteEvent } from "../controllers/event.controllers.js"
import { validateEventInfo } from "../middleware/event.middleware.js"

const  router = Router();

router.post("/event", validateEventInfo, createEvent)
router.get("/allevents", getEvents)
router.put("/event/:id", updateEvent)
router.delete("/event/:id", deleteEvent)

export default router;