const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

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

function createSchedulerInfo(count, month, year) {
    const people = (() => {
        const peopleList = [];

        for (let i = 0; i < count; i++) {
            peopleList.push(createPerson("Person " + (i + 1)));
        }

        return peopleList;
    })();

    return {
        people,
        month,
        year
    };
}

export {
    createSchedulerInfo
}