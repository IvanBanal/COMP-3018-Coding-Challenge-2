import { Router } from "express";
import { getEvents,
        getEvent,
        getEventPopularity,
        createEvent,
        updateEvent,
        deleteEvent 
    } from "../controllers/eventController";

const router = Router();

router.get("/", getEvents);
router.get("/:id/popularity", getEventPopularity);
router.get("/:id", getEvent);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;