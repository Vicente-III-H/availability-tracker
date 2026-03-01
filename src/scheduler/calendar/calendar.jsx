import { weekdayAbbreviation } from "../../global";
import { VIEW_DEFAULT, Severity, PeopleList } from "../scheduler-types";
import './calendar.css'

function Day({ date, specificClass, severity, clickDayFunction = null, disabled = false }) {
    if (disabled) {
        return <div className={"day disabled" + specificClass}></div>
    }

    const severityStyling = severity ? { backgroundColor: Severity.getColorOf(severity) } : { backgroundColor: "var(--day-free)" }

    const onClick = () => {
        if (clickDayFunction) { clickDayFunction(date) }
    }

    return <div className={"day" + specificClass} style={severityStyling} onClick={onClick}>{date}</div>
}

function Calendar({ peopleList, calendarData, mode, view }) {
    const totalNumberOfDays = calendarData.current.getNumberOfCalendarDays();

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

    return (
        <div id="calendar">
            <div className="title">{calendarData.current.getMonthName() + " " + calendarData.current.getYear()}</div>
            <div id="weekdays">{weekdayAbbreviation.map((weekday) => { return <div key={weekday}>{weekday}</div> })}</div>
            <div id="days">
                {calendarData.current.getCalendarDaysList().map((dayObj, index) => {
                    let daySpecificClass = "";
                    if (index % 7 === 0) { daySpecificClass += " first-day" }
                    if (index % 7 === 6) { daySpecificClass += " last-day"}
                    if (index >= totalNumberOfDays - 7) { daySpecificClass += " last-week"}
                    if (mode.current !== "View" && view.current !== VIEW_DEFAULT) { daySpecificClass += " pointer" }

                    if (dayObj.day === "disabled") {
                        return <Day disabled={true} specificClass={daySpecificClass} key={dayObj.id}></Day>
                    } else if (view.current === VIEW_DEFAULT) {
                        return (
                            <Day
                                date={dayObj.day}
                                severity={peopleList.current.getHighestSeverityOn(dayObj.day)}
                                specificClass={daySpecificClass}
                                key={dayObj.id}
                            />
                        )
                    } else {
                        return (
                            <Day
                                date={dayObj.day}
                                severity={peopleList.current.getPersonAvailabilityOn(view.current, dayObj.day)}
                                clickDayFunction={clickDayFunction}
                                specificClass={daySpecificClass}
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