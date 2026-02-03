// ----------------------
// Interfaces.
// ----------------------
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

// ----------------------
// Hard-coded sample datas.
// ----------------------
const events: EventRecord[] = [
    { id: 1, name: "Tech Conference 2025", date: "2025-03-15T09:00:00.000Z", capacity: 200, registrationCount: 185 },
    { id: 2, name: "Startup Pitch Night", date: "2025-02-20T18:00:00.000Z", capacity: 50, registrationCount: 12 },
    { id: 3, name: "Web Dev Workshop", date: "2025-02-10T10:00:00.000Z", capacity: 30, registrationCount: 30 }
];  

const attendees: Attendee[] = [
    { id: 1, name: "Jordan Smith", email: "jordan.smith@email.com" },
    { id: 2, name: "Alex Chen", email: "alex.chen@email.com" }
];

// ----------------------
// Service functions.
// ----------------------
// Returns all events.
export const getAllEvents = (): EventRecord[] => events;

// Finds an event by its ID from the events array.
export const getEventById = (id: number): EventRecord | undefined =>
    events.find((event) => event.id === id);

// Create new event.
export const createEvent = (data: { name: string; date: string; capacity: number }) => {
    const newEvent: EventRecord = {
        /**
         * This will get the current length of the array and 
         * adds 1 to it when creating a new event.
         */
        id: events.length + 1, 
        registrationCount: 0,
        name: data.name,
        date: data.date,
        capacity: data.capacity
    };

    events.push(newEvent)
    return newEvent;
};

