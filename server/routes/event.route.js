import {Router} from "express"
import { createEvent,getEvents,updateEvent } from "../controllers/event.controllers.js"
import { validateEventInfo } from "../middleware/event.middleware.js"

const  router = Router();

router.post("/event", validateEventInfo, createEvent)
router.get("/allevents", getEvents)
router.put("/event/:id", updateEvent)

export default router;