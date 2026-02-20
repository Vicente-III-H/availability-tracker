import { weekdayAbbreviation } from "../scheduler-types"; 

function Calendar({ duration }) {
    return (
        <div id="calendar">
            <div>{duration.getMonthName()}</div>
            <div id="weekdays">{weekdayAbbreviation.map((weekday) => { return <div key={weekday}>{weekday}</div> })}</div>
            <div></div>
        </div>
    )
}

export default Calendar;