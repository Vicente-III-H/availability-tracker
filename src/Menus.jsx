import { useState } from "react"

const Menus = Object.freeze({
    Start: "Start",
    Count: "Count",
    Date: "Date",
    Calendar: "Calendar"
});

function StartMenu({ setCurrentMenu }) {
    return (
        <div>
            <div>
                <h1>availabilityTracker</h1>
                <p>A scheduler for viewing your friends' busy busy lives</p>
            </div>
            <div>
                <button onClick={() => {setCurrentMenu(Menus.Count)}}>Continue</button>
            </div>
        </div>
    )
}

function CountMenu({ setCurrentMenu }) {
    return (
        <div>
            <div>
                <div><h1>How many people?</h1></div>
                <div><button onClick={() => {setCurrentMenu(Menus.Date)}}>Continue</button></div>
            </div>
            <div>
                <div>{":)"}</div>
                <div>
                    <button>-</button>
                    <input type="number" />
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

function DateMenu({ setCurrentMenu }) {
    return (
        <div>
            <div>
                <div>
                    <h1>When is when?</h1>
                    <p>Error messages will display here</p>
                </div>
                <div><button onClick={() => {setCurrentMenu(Menus.Calendar)}}>Continue</button></div>
            </div>
            <div>
                <div>
                    <h2>Month</h2>
                    
                </div>
            </div>
        </div>
    )
}

function MenuSelector() {
    const [currentMenu, setCurrentMenu] = useState(Menus.Start);

    switch (currentMenu) {
        case Menus.Start:
            return <StartMenu setCurrentMenu={setCurrentMenu} />
        case Menus.Count:
            return <CountMenu setCurrentMenu={setCurrentMenu} />
        case Menus.Date:
            return <DateMenu setCurrentMenu={setCurrentMenu} />
        case Menus.Calendar:
            return <></>
        default:
            return <StartMenu setCurrentMenu={setCurrentMenu} />
    }
}

export default MenuSelector;