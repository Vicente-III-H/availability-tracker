import { weekdayAbbreviation } from "../../global";

function Day() {
    return (
        <div></div>
    )
}

function Calendar({ People, CalendarInfo, viewAvailability }) {
    return (
        <div id="calendar">
            <div>{CalendarInfo.getMonthName()}</div>
            <div id="weekdays">{weekdayAbbreviation.map((weekday) => { return <div key={weekday}>{weekday}</div> })}</div>
            <div id="days">

            </div>
        </div>
    )
}

export default Calendar;