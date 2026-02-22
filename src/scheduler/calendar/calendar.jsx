import { weekdayAbbreviation } from "../../global";
import { VIEW_DEFAULT, Severity, PeopleList } from "../scheduler-types";
import './calendar.css'

function Day({ date, severity, clickDayFunction = null, disabled = false }) {
    if (disabled) {
        return <div className="day disabled"></div>
    }

    const severityStyling = severity ? { backgroundColor: Severity.getColorOf(severity) } : { backgroundColor: "var(--day-free)" }

    const onClick = () => {
        if (clickDayFunction) { clickDayFunction(date) }
    }

    return <div className="day" style={severityStyling} onClick={onClick}>{date}</div>
}

function Calendar({ peopleList, CalendarInfo, mode, view }) {
    const blockDay = (date) => {
        peopleList.set(PeopleList.blockAvailabilityOf(peopleList.current, view.current, date, mode.current));
    };

    const freeDay = (date) => {
        peopleList.set(PeopleList.freeAvailabilityOf(peopleList.current, view.current, date));
    }

    const clickDayFunction = ((() => {
        if (mode.current === "Free") {
            return freeDay;
        } else if (Severity.isASeverity(mode.current)) {
            return blockDay;
        } else {
            return null;
        }
    })());

    const daysList = (() => {
        const firstDayOffset = (new Date(CalendarInfo.year(), CalendarInfo.month())).getDay();
        const totalDaysInMonth = (new Date(CalendarInfo.year(), CalendarInfo.month() + 1, 0)).getDate();

        const numberOfFullWeeks = Math.floor((firstDayOffset + totalDaysInMonth) / 7);
        const weekForRemainingDays = (firstDayOffset + totalDaysInMonth) % 7 > 0 ? 1 : 0;
        const numberOfWeeks = numberOfFullWeeks + weekForRemainingDays;

        const daysList = [];
        for (let i = 0; i < numberOfWeeks * 7; i++) {
            const dayObj = {
                id: crypto.randomUUID()
            }

            if (i < firstDayOffset) {
                dayObj.day = "disabled";
            } else if (i < firstDayOffset + totalDaysInMonth) {
                dayObj.day = (i - firstDayOffset + 1).toString();
            } else {
                dayObj.day = "disabled";
            }

            daysList.push(dayObj);
        }

        return daysList;
    })();

    return (
        <div id="calendar">
            <div>{CalendarInfo.monthName()}</div>
            <div id="weekdays">{weekdayAbbreviation.map((weekday) => { return <div key={weekday}>{weekday}</div> })}</div>
            <div id="days">
                {daysList.map((dayObj) => {
                    if (dayObj.day === "disabled") {
                        return <Day disabled={true} key={dayObj.id}></Day>
                    } else if (view.current === VIEW_DEFAULT) {
                        return (
                            <Day
                                date={dayObj.day}
                                severity={peopleList.current.getHighestSeverityOn(dayObj.day)}
                                key={dayObj.id}
                            />
                        )
                    } else {
                        return (
                            <Day
                                date={dayObj.day}
                                severity={peopleList.current.getPersonAvailabilityOn(view.current, dayObj.day)}
                                clickDayFunction={clickDayFunction}
                                key={dayObj.id}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Calendar;