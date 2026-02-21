import { monthNames } from "../global";

const VIEW_DEFAULT = "All";

const Severity = (() => {
    /* Lowest severity has lowest index in severityList */
    const severityList = []
    const severityTracker = {}

    return {
        add: (name, color) => {
            const severity = {
                name,
                color,
                id: crypto.randomUUID()
            }

            severityList.push(severity);
            severityTracker[severity.name] = severityList.length - 1;
        },

        list: () => severityList,

        getIndexOf: (severityName) => severityTracker[severityName]
    }
})();
Severity.add("Unsure", "rgba(246, 225, 42, 0.9)");
Severity.add("Partially Busy", "rgba(226, 46, 46, 0.9)");
Severity.add("Unavailable", "rgba(29, 29, 29, 0.9)");

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

    function duplicate(availability) {
        const newAvailability = {...availability.getFullAvailability()};
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
        duplicate,
        blockOn,
        freeOn
    }
})());

const Person = Object.freeze((() => {
    function pack(personTemplate) {
        return {
            getName: () => personTemplate.name,

            getId: () => personTemplate.id,

            ...personTemplate.availability
        }
    }

    function create(name) {
        const availability = Availability.create();

        const newPersonTemplate = {
            name: name,
            id: crypto.randomUUID(),
            availability: availability
        };

        return pack(newPersonTemplate);
    }

    function changeName(person, newName) {
        const newAvailability = Availability.duplicate(person);

        const newPersonTemplate = {
            name: newName,
            id: person.id(),
            availability: newAvailability
        };

        return pack(newPersonTemplate);
    }

    function blockOn(person, date, severity) {
        const newAvailability = Availability.blockOn(person, date, severity);

        const newPersonTemplate = {
            name: person.name(),
            id: person.id(),
            availability: newAvailability
        };

        return pack(newPersonTemplate);
    }

    function freeOn(person, date) {
        const newAvailability = Availability.freeOn(person, date);

        const newPersonTemplate = {
            name: person.name(),
            id: person.id(),
            availability: newAvailability
        };

        return pack(newPersonTemplate);
    }

    return {
        create,
        changeName,
        blockOn,
        freeOn
    }
})());

const PeopleList = Object.freeze((() => {
    function pack(peopleListTemplate) {
        return {
            list: () => peopleListTemplate.peopleList,

            getHighestSeverityOn: (date) => {
                let highestSeverity = -1;
                for (const person of peopleListTemplate.peopleList) {
                    const availability = person.getAvailabilityOn(date);
                    if (availability) {
                        highestSeverity = Severity.getIndexOf(availability) > highestSeverity ? Severity.getIndexOf(availability) : highestSeverity;
                    }
                }
                return highestSeverity === -1 ? null : highestSeverity;
            },

            getPersonAvailabilityOn: (personId, date) => {
                const personIndex = peopleListTemplate.idTracker[personId];
                const person = peopleListTemplate.peopleList[personIndex];
                return person.getAvailabilityOn(date);
            }
        }
    }

    function create(count) {
        const idTracker = {};
        const peopleList = ((idTracker) => {
            const list = [];
            for (let i = 0; i < count; i++) {
                const person = Person.create("Person " + (i + 1));
                list.push(person);
                idTracker[person.getId()] = i;
            }
            return list;
        })(idTracker);

        const newPeopleListTemplate = {
            peopleList,
            idTracker
        }

        return pack(newPeopleListTemplate);
    }

    return {
        create
    }
})());

function createCalendarInfo(month, year) {
    const calendarInfo = {}
    calendarInfo.month = () => month;
    calendarInfo.monthName = () => getMonthName(month);
    calendarInfo.year = () => year;

    return calendarInfo;
}

export {
    VIEW_DEFAULT,
    Severity,
    PeopleList,
    createCalendarInfo
}