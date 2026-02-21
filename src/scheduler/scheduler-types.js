import { monthNames } from "../global";

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

    const key = crypto.randomUUID();
    const getKey = () => key;

    return {
        name,
        ...availability,
        getKey
    };
}

function createPeopleList(count) {
    const keyTracker = {};

    const peopleList = ((tracker) => {
        const list = [];
        for (let i = 0; i < count; i++) {
            const person = createPerson("Person " + (i + 1));
            list.push(person);
            tracker[person.getKey()] = i;
        }
        return list;
    })(keyTracker);

    const getList = () => peopleList;

    return {
        getList
    }
}

function createCalendarInfo(month, year) {
    const calendarInfo = {}
    calendarInfo.getMonthName = () => getMonthName(month);
    calendarInfo.getYear = () => year;

    return calendarInfo;
}

export {
    createPeopleList,
    createCalendarInfo
}