import { useEffect, useRef, useState } from "react"
import { Limits, MenuNames, Menus } from "./menu-types"
import { CalendarData, PeopleList } from "../scheduler/scheduler-types"
import './Menus.css'
import { clampNumber } from "../global"

function FaceLogo({ size }) {
    return (
        <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M179.489 88.4255C76.4498 86.7958 -1.9973 193.895 42.7541 279.57C87.5054 365.246 188.674 377.002 270.5 350.5C345.546 326.194 407.112 226.404 355.736 135.986C281.06 4.55912 134.154 56.9102 134.154 56.9102" stroke="black" strokeWidth="32" strokeLinecap="round"/>
            <ellipse cx="151.376" cy="196.961" rx="20.5" ry="20" transform="rotate(-9 151.376 196.961)" fill="black"/>
            <circle cx="251.882" cy="185.882" r="20" transform="rotate(-9 251.882 185.882)" fill="black"/>
            <path d="M150.493 265.95C150.493 265.95 176.161 276.95 204.993 274.95C232.595 273.035 251.994 256.45 251.994 256.45" stroke="black" strokeWidth="32" strokeLinecap="round"/>
        </svg>
    )
}

function StartMenu({ setMenu }) {
    const [titleHeight, setTitleHeight] = useState(0);
    const title = useRef(null);

    useEffect(() => {
        setTitleHeight(title.current.offsetHeight);
    }, []);

    return (
        <div id="start-menu">
            <div>
                <div className="title-container">
                    <FaceLogo size={titleHeight} />
                    <h1 className="title" ref={title}>miniSched</h1>
                </div>
                <p>A scheduler for keeping track of your friends' busy, busy lives</p>
            </div>
            <div>
                <button onClick={() => {setMenu(Menus.next(MenuNames.Start))}}>Start Scheduling</button>
            </div>
        </div>
    )
}

function CountMenu({ setMenu, setPeopleList }) {
    const [count, setCount] = useState(Limits.minPeople);

    const decreaseCount = () => {
        setCount(Math.max(count - 1, Limits.minPeople));
    }

    const increaseCount = () => {
        setCount(Math.min(count + 1, Limits.maxPeople))
    }

    const continueFunction = () => {
        setPeopleList(PeopleList.create(count));
        setMenu(Menus.next(MenuNames.Count));
    };

    return (
        <div id="count-menu" className="menu">
            <div className="left">
                <div><h1 className="title">How many people?</h1></div>
                <div><button onClick={continueFunction}>Continue</button></div>
            </div>
            <div className="right">
                <div className="counter">
                    <button onClick={increaseCount}>+</button>
                    <div className="number-display">{count}</div>
                    <button className="bottom" onClick={decreaseCount}>-</button>
                </div>
            </div>
        </div>
    )
}

function DateMenu({ setMenu, setCalendarData }) {
    const [month, setMonth] = useState((new Date()).getMonth() + 1);
    const [year, setYear] = useState((new Date()).getFullYear());

    const increaseMonth = () => {
        setMonth(month === 12 ? 1 : month + 1);
    }

    const decreaseMonth = () => {
        setMonth(month === 1 ? 12 : month - 1);
    }

    const increaseYear = () => {
        setYear(year + 1);
    }

    const decreaseYear = () => {
        setYear(Math.max(Limits.minYear, year - 1));
    }

    const continueFunction = () => {
        setCalendarData(CalendarData.create(month - 1, year));
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
                    <div className="counter">
                        <button onClick={increaseMonth}>+</button>
                        <div className="counter-container">
                            <div className="counter-label">MM</div>
                            <div className="number-display">{month}</div>
                        </div>
                        <button className="bottom" onClick={decreaseMonth}>-</button>
                    </div>
                    <div className="counter">
                        <button onClick={increaseYear}>+</button>
                        <div className="counter-container">
                            <div className="counter-label">YYYY</div>
                            <div className="number-display">{year}</div>
                        </div>
                        <button className="bottom" onClick={decreaseYear}>-</button>
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