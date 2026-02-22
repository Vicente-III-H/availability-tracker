import { useState } from "react"
import { Limits, MenuNames, Menus } from "./menu-types"
import { PeopleList } from "../scheduler/scheduler-types"
import './Menus.css'
import { clampNumber } from "../global"

function StartMenu({ setMenu }) {
    return (
        <div className="menu">
            <div>
                <h1>availabilityTracker</h1>
                <p>A scheduler for viewing your friends' busy busy lives</p>
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
        <div className="menu">
            <div>
                <div><h1>How many people?</h1></div>
                <div><button onClick={continueFunction}>Continue</button></div>
            </div>
            <div>
                <div>{":)"}</div>
                <div>
                    <button onClick={decreaseCount}>-</button>
                    <input
                        id="count-input"
                        type="number"
                        min={Limits.minPeople}
                        max={Limits.maxPeople}
                        value={count}
                        onChange={(event) => {setCount(event.target.value)}}
                    />
                    <button onClick={increaseCount}>+</button>
                </div>
            </div>
        </div>
    )
}

function DateMenu({ setMenu }) {
    return (
        <div className="menu">
            <div>
                <div>
                    <h1>When is when?</h1>
                </div>
                <div><button onClick={() => {setMenu(Menus.next(MenuNames.Date))}}>Continue</button></div>
            </div>
            <div>
                <div>
                    <label htmlFor="month-input">Month</label>
                    <input id="month-input" type="number" />
                </div>
                <div>
                    <label htmlFor="year-input">Year</label>
                    <input id="year-input" type="number" />
                </div>
            </div>
        </div>
    )
}

function MenuSelector({ menu, setMenu, setPeopleList }) {
    switch (menu) {
        case MenuNames.Start:
            return <StartMenu setMenu={setMenu} />
        case MenuNames.Count:
            return <CountMenu setMenu={setMenu} setPeopleList={setPeopleList} />
        case MenuNames.Date:
            return <DateMenu setMenu={setMenu} />
        default:
            return <StartMenu setMenu={setMenu} />
    }
}

export default MenuSelector;