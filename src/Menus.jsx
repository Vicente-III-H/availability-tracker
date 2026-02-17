function StartMenu() {
    return (
        <div>
            <div>
                <h1>availabilityTracker</h1>
                <p>A scheduler for viewing your friends' busy busy lives</p>
            </div>
            <div>
                <button>Continue</button>
            </div>
        </div>
    )
}

function CountMenu() {
    return (
        <div>
            <div>
                <div><h1>How many people?</h1></div>
                <div><button>Continue</button></div>
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

function DateMenu() {
    return (
        <div>
            <div>
                <div>
                    <h1>When to when?</h1>
                    <p>Max duration is 3 months</p>
                </div>
                <div><button>Continue</button></div>
            </div>
            <div>
                <div>
                    <h2>From</h2>
                    <input type="date" />
                </div>
                <div>
                    <h2>To</h2>
                    <input type="date" />
                </div>
            </div>
        </div>
    )
}

function MenuSelector() {
    return (
        <DateMenu></DateMenu>
    )
}

export default MenuSelector;