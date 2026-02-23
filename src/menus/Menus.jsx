import { useState } from "react"
import { Limits, MenuNames, Menus } from "./menu-types"
import { CalendarData, PeopleList } from "../scheduler/scheduler-types"
import './Menus.css'
import { clampNumber } from "../global"

function StartMenu({ setMenu }) {
    return (
        <div id="start-menu">
            <div>
                <h1 className="title">miniSched</h1>
                <p>A scheduler for keeping track of your friends' busy, busy lives</p>
            </div>
            <div>
                <button onClick={() => {setMenu(Menus.next(MenuNames.Start))}}>Continue</button>
            </div>
        </div>
    )
}

function CountMenu({ setMenu, setPeopleList }) {
    const [count, setCount] = useState(1);

    const limitPeople = (number) => {
        return clampNumber(number, Limits.minPeople, Limits.maxPeople);
    }

    const decreaseCount = () => {
        setCount(Math.max(count - 1, Limits.minPeople));
    }

    const increaseCount = () => {
        setCount(Math.min(count + 1, Limits.maxPeople))
    }

    const continueFunction = () => {
        setPeopleList(PeopleList.create(limitPeople(count)));
        setMenu(Menus.next(MenuNames.Count));
    };

    return (
        <div id="count-menu" className="menu">
            <div className="left">
                <div><h1 className="title">How many people?</h1></div>
                <div><button onClick={continueFunction}>Continue</button></div>
            </div>
            <div className="right">
                <div>
                    <button onClick={increaseCount}>+</button>
                    <div id="count-display">{count}</div>
                    <button onClick={decreaseCount}>-</button>
                </div>
            </div>
        </div>
    )
}

function DateMenu({ setMenu, setCalendarData }) {
    const [date, setDate] = useState((() => {
        const currentDate = new Date();
        return {
            month: currentDate.getMonth() + 1,
            year: currentDate.getFullYear()
        }
    })());

    const setYear = (newYear) => {
        const newDate = {...date};
        newDate.year = newYear;
        setDate(newDate);
    }

    const setMonth = (newMonth) => {
        const newDate = {...date};
        newDate.month = newMonth;
        setDate(newDate);
    }

    const continueFunction = () => {
        const currentDate = {...date};
        if (currentDate.month === "") { currentDate.month = (new Date()).getMonth() + 1 }
        if (currentDate.year === "") { currentDate.year = (new Date()).getFullYear() }
        setCalendarData(CalendarData.create(clampNumber(currentDate.month - 1, 0, 11), Math.max(currentDate.year, Limits.minYear)));
        setMenu(Menus.next(MenuNames.Date));
    }

    return (
        <div id="date-menu" className="menu">
            <div className="left">
                <div>
                    <h1 className="title">When is when?</h1>
                </div>
                <div><button onClick={continueFunction}>Continue</button></div>
            </div>
            <div className="right">
                <div>
                    <div className="input-with-label">
                        <label htmlFor="month-input">Month</label>
                        <input
                            id="month-input"
                            type="number"
                            min={1}
                            max={12}
                            value={date.month}
                            onChange={(event) => {setMonth(event.target.value)}}
                        />
                    </div>
                    <div className="separator">{"/"}</div>
                    <div className="input-with-label">
                        <label htmlFor="year-input">Year</label>
                        <input
                            id="year-input"
                            type="number"
                            min={Limits.minYear}
                            value={date.year}
                            onChange={(event) => {setYear(event.target.value)}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function MenuSelector({ menu, setMenu, setPeopleList, setCalendarData }) {
    switch (menu) {
        case MenuNames.Start:
            return <StartMenu setMenu={setMenu} />
        case MenuNames.Count:
            return <CountMenu setMenu={setMenu} setPeopleList={setPeopleList} />
        case MenuNames.Date:
            return <DateMenu setMenu={setMenu} setCalendarData={setCalendarData} />
        default:
            return <StartMenu setMenu={setMenu} />
    }
}

export default MenuSelector;