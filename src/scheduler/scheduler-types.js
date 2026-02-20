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
    }
}

export {
    createPerson
}