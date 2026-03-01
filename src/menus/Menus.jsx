import { useState } from "react"
import { Limits, MenuNames, Menus } from "./menu-types"
import { CalendarData, PeopleList } from "../scheduler/scheduler-types"
import './Menus.css'
import { clampNumber } from "../global"

function FaceLogo() {
    return (
        <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.55912 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
            <ellipse cx="151.376" cy="196.961" rx="20.5" ry="20" transform="rotate(-9 151.376 196.961)" fill="black"/>
            <circle cx="251.882" cy="185.882" r="20" transform="rotate(-9 251.882 185.882)" fill="black"/>
            <path d="M150.493 265.95C150.493 265.95 176.161 276.95 204.993 274.95C232.595 273.035 251.994 256.45 251.994 256.45" stroke="black" strokeWidth="32" strokeLinecap="round"/>
        </svg>
    )
}

function StartMenu({ setMenu }) {
    return (
        <div id="start-menu">
            <div>
                <FaceLogo />
                <h1 className="title">miniSched</h1>
                <p>A scheduler for keeping track of your friends' busy, busy lives</p>
            </div>
            <div>
                <button onClick={() => {setMenu(Menus.next(MenuNames.Start))}}>Start Scheduling</button>
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
                    <button className="bottom" onClick={decreaseCount}>-</button>
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