interface EventRecord {
    id: number;
    name: string;
    date: string;
    capacity: number;
    registrationCount: number;
}

interface Attendee {
    id: number;
    name: string;
    email: string;
}

// Hard-coded sample data of events.
const events: EventRecord[] = [
    {
        id: 1,
        name: "Tech Conference 2025",
        date: "2025-03-15T09:00:00.000Z",
        capacity: 200,
        registrationCount: 185,
    },
        {
        id: 2,
        name: "Startup Pitch Night",
        date: "2025-02-20T18:00:00.000Z",
        capacity: 50,
        registrationCount: 12,
    },
        {
        id: 3,
        name: "Web Dev Workshop",
        date: "2025-02-10T10:00:00.000Z",
        capacity: 30,
        registrationCount: 30,
    },
]; 

// Returns all events.
export const getAllEvents = (): EventRecord[] => events;

// Finds an event by its ID from the events array.
export const getEventById = (id: number): EventRecord | undefined =>
    events.find((event) => event.id === id);

// Creates a new event with default registrationCount = 0.
export const createEvent = (
    name: string,
    date: string,
    capacity: number,
): EventRecord => {
    const newEvent: EventRecord = {
        /**
         * events.length will return the number of items in the EventRecord array
         * and adds 1 to the current length.
         */
        id: events.length + 1,
        name,
        date,
        capacity,
        registrationCount: 0,
    };
    
    // This will add a new item to the array.
    events.push(newEvent);
    return newEvent;
};