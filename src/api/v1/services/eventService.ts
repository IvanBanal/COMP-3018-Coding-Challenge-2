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

// Update existing event.
// Partial will make all fields optional.
export const updateEvent = (id: number, data: Partial<{ name: string; date: string; capacity: number }>) => {
    const event = getEventById(id);
    if (!event) return null;
    
    if (data.name) event.name = data.name;
    if (data.date) event.date = data.date;
    if (data.capacity !== undefined) event.capacity = data.capacity;

    return event;
};

// Delete event.
export const deleteEvent = (id: number) => {
    // This will find the location of the id input.
    const index = events.findIndex(event => event.id === id);
    if (index === -1) return false;
    // This will delete the event.
    events.splice(index, 1);
    return true;
};  

// Get popularity infor for an event.
export const getEventPopularity = (id: number) => {
    const event = getEventById(id);
    if (!event) return null;

    const spotsRemaining = event.capacity - event.registrationCount;

    let popularityScore = 0;
    if (event.capacity > 0) {
        /**
         * This formula will get the popularity score.
         * .toFixed(1) will round the number to 1 decimal place, but returns a string like "85.5".
         * parseFloat() will convert it back to a number so popularityScore is 85.5 instead of "85.5".  
         */
        popularityScore = parseFloat(
            ((event.registrationCount / event.capacity) * 100).toFixed(1)
        );
    }

    // Defaults popularityTier to "New" if none of the if-else statements run.
    let popularityTier = "New";
    if (popularityScore >= 90) popularityTier = "Hot";
    else if (popularityScore >= 70) popularityTier = "Popular";
    else if (popularityScore >= 50) popularityTier = "Moderate";
    else if (popularityScore >= 25) popularityTier = "Building";

    return {
        id: event.id,
        name: event.name,
        date: event.date,
        capacity: event.capacity,
        registrationCount: event.registrationCount,
        spotsRemaining: spotsRemaining,
        popularityScore: popularityScore,
        popularityTier: popularityTier
    };
};