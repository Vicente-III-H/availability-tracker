import { MenuNames, Menus } from "./menu-types"

function StartMenu({ setMenu }) {
    return (
        <div>
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

function CountMenu({ setMenu }) {
    return (
        <div>
            <div>
                <div><h1>How many people?</h1></div>
                <div><button onClick={() => {setMenu(Menus.next(MenuNames.Count))}}>Continue</button></div>
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

function DateMenu({ setMenu }) {
    return (
        <div>
            <div>
                <div>
                    <h1>When is when?</h1>
                    <p>Error messages will display here</p>
                </div>
                <div><button onClick={() => {setMenu(Menus.next(MenuNames.Date))}}>Continue</button></div>
            </div>
            <div>
                <div>
                    <h2>Month</h2>
                    
                </div>
            </div>
        </div>
    )
}

function MenuSelector({ menu, setMenu }) {
    switch (menu) {
        case MenuNames.Start:
            return <StartMenu setMenu={setMenu} />
        case MenuNames.Count:
            return <CountMenu setMenu={setMenu} />
        case MenuNames.Date:
            return <DateMenu setMenu={setMenu} />
        default:
            return <StartMenu setMenu={setMenu} />
    }
}

export default MenuSelector;