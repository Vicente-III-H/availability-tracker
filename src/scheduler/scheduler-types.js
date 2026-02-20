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
}

function createPerson(name) {
    const availability = createAvailability();

    return {
        name,
        ...availability
    };
}

function createSchedulerInfo(count, month, year) {
    const people = () => {
        const peopleList = [];

        for (let i = 0; i < count; i++) {
            peopleList.push(createPerson("Person " + i));
        }

        return peopleList;
    }

    return {
        people,
        month,
        year
    };
}

export {
    createSchedulerInfo
}