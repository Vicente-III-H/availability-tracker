import { monthNames } from "../global";

const VIEW_DEFAULT = "All";

/* From lowest severity to highest */
const severities = [
    "Unsure",
    "Partially Busy",
    "Unavailable"
]

function getMonthName(monthIndex) {
    return monthNames[monthIndex];
}

function createAvailability() {
    const availability = {}

    const blockDate = (date, severity) => {
        availability[date] = severity;
    };
    const freeDate = (date) => {
        delete availability[date];
    };
    const getBlockedDate = (date) => {
        if (Object.hasOwn(availability, date)) {
            return availability[date];
        }
        return null;
    };

    return {
        blockDate,
        freeDate,
        getBlockedDate
    }
}

function createPerson(name) {
    const availability = createAvailability();

    const id = crypto.randomUUID();
    const getId = () => id;

    return {
        name: () => name,
        ...availability,
        id: getId
    };
}

function createPeopleList(count) {
    const idTracker = {};

    const peopleList = ((idTracker) => {
        const list = [];
        for (let i = 0; i < count; i++) {
            const person = createPerson("Person " + (i + 1));
            list.push(person);
            idTracker[person.id()] = i;
        }
        return list;
    })(idTracker);

    const getList = () => peopleList;

    return {
        getList
    }
}

function createCalendarInfo(month, year) {
    const calendarInfo = {}
    calendarInfo.month = () => month;
    calendarInfo.monthName = () => getMonthName(month);
    calendarInfo.year = () => year;

    return calendarInfo;
}

export {
    VIEW_DEFAULT,
    createPeopleList,
    createCalendarInfo
}