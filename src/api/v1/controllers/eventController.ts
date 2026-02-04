import { Request, Response } from "node_modules/@types/express";
import * as eventService from "../services/eventService";
import { HTTP_STATUS } from "src/constants/httpConstants";

export const getEvents = (req: Request, res: Response) => {
    const events = eventService.getAllEvents();
    res.status(HTTP_STATUS.OK).json({ count: events.length, events });
};

export const getEvent = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const event = eventService.getEventById(id);
    if (!event) return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Event not found" });
    res.status(HTTP_STATUS.OK).json(event);
};

export const getEventPopularity = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const popularity = eventService.getEventPopularity(id);
    if (!popularity) return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Event not found" });
    res.status(HTTP_STATUS.OK).json(popularity);
};

export const createEvent = (req: Request, res: Response) => {
    const { name, date, capacity } = req.body;
    if (!name || !date || capacity === undefined) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Missing required fields" });
    }
    const event = eventService.createEvent({ name, date, capacity });
    res.status(HTTP_STATUS.CREATED).json(event);
};

export const updateEvent = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Missing event id" });

    const event = eventService.updateEvent(id, req.body);
    if (!event) return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Event not found" });

    res.status(HTTP_STATUS.OK).json(event);
};

export const deleteEvent = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleted = eventService.deleteEvent(id);
    if (!deleted) return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Event not found" });

    res.status(HTTP_STATUS.OK).json({ message: "Event deleted successfully" });
};