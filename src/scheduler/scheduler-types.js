import { monthNames } from "../global";

const VIEW_DEFAULT = "All";

function createSeverity(name, rgba) {
    return {
        name,
        rgba
    }
}

/* From lowest severity to highest */
const severities = [
    createSeverity("Unsure", "rgba(246, 225, 42, 0.9)"),
    createSeverity("Partially Busy", "rgba(226, 46, 46, 0.9)"),
    createSeverity("Unavailable", "rgba(29, 29, 29, 0.9)")
]

function getMonthName(monthIndex) {
    return monthNames[monthIndex];
}

const Availability = Object.freeze((() => {
    function pack(availabilityObj) {
        return {
            getFullAvailability: () => availabilityObj,

            getAvailabilityOn: (date) => {
                if (!Object.hasOwn(availabilityObj, date)) {
                    return null
                }
                return availabilityObj[date]
            }
        }
    }

    function create() {
        const newAvailability = {};
        return pack(newAvailability);
    }

    function blockOn(availability, date, severity) {
        const newAvailability = {...availability.getFullAvailability()};
        newAvailability[date] = severity;
        return pack(newAvailability);
    }

    function freeOn(availability, date) {
        const newAvailability = {...availability.getFullAvailability()};
        delete newAvailability[date];
        return pack(newAvailability);
    }

    return {
        create,
        blockOn,
        freeOn
    }
})());

function createPerson(name) {
    const availability = Availability.create();

    const id = crypto.randomUUID();
    const getId = () => id;

    return {
        name: () => name,
        id: getId,
        ...availability,
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

    const getAvailabilityOn = (date) => {
        let highestAvailability = -1;
        for (const person in peopleList) {

        }
    }

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
    severities,
    Availability,
    createPeopleList,
    createCalendarInfo
}