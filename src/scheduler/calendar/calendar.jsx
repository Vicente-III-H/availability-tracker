import { weekdayAbbreviation } from "../../global";

function Day() {
    return (
        <div></div>
    )
}

function Calendar({ People, CalendarInfo, viewAvailability }) {
    const daysInfo = (() => {
        const firstDayOffset = (new Date(CalendarInfo.year(), CalendarInfo.month())).getDay();
        const totalDaysInMonth = (new Date(CalendarInfo.year(), CalendarInfo.month() + 1, 0)).getDate();

        const numberOfFullWeeks = Math.floor((firstDayOffset + totalDaysInMonth) / 7);
        const weekForRemainingDays = (firstDayOffset + totalDaysInMonth) % 7 > 0 ? 1 : 0;
        const numberOfWeeks = numberOfFullWeeks + weekForRemainingDays;

        return {
            firstDayOffset,
            totalDaysInMonth,
            numberOfWeeks
        }
    })();

    return (
        <div id="calendar">
            <div>{CalendarInfo.monthName()}</div>
            <div id="weekdays">{weekdayAbbreviation.map((weekday) => { return <div key={weekday}>{weekday}</div> })}</div>
            <div id="days">
                
            </div>
        </div>
    )
}

export default Calendar;