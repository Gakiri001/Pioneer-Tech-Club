import {Router} from "express"
import { createEvent } from "../controllers/event.controllers.js"
import { validateEventInfo } from "../middleware/event.middleware.js"

const  router = Router();

router.post("/event", validateEventInfo, createEvent)

export default router;