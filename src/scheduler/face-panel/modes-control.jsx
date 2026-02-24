import { useState } from "react";
import { Severity } from "../scheduler-types";
import { VIEW_DEFAULT } from "../scheduler-types";
import './modes-control.css'

function DropdownDivider() {
    return (
        <div className="dropdown-divider"></div>
    )
}

function DropdownOption({ name, setMode }) {
    return (
        <button className="dropdown-option" onClick={() => {setMode(name)}}>
            {name}
        </button>
    )
}

function Dropdown({ setMode }) {
    return (
        <div className="dropdown-menu">
            <DropdownOption name={"View"} setMode={setMode} />
            <DropdownDivider />
            {Severity.list().toReversed().map((severity) => <DropdownOption name={severity.name} setMode={setMode} key={severity.id}/>)}
            <DropdownDivider />
            <DropdownOption name={"Free"} setMode={setMode} />
        </div>
    )
}

function ModesControl({ getPerson, mode, view }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const setMode = (value) => {
        setShowDropdown(false);
        mode.set(value);
        view.set(VIEW_DEFAULT);
    }

    const displayHelpText = () => {
        if (view.current === VIEW_DEFAULT) {
            switch (mode.current) {
                case "View":
                    return "Click any person to view their availability or change Modes with drop-down below"
                case "Free":
                    return "Click any person to free up their availability"
                default:
                    return `Click any person to mark their schedule as "${mode.current}"`
            }
        }
        return `Viewing ${getPerson(view.current).getName()}'s availability`
    }

    return (
        <div id="modes">
            <div id="modes-text">{displayHelpText()}</div>
            <div className="dropdown">
                <button onClick={toggleDropdown}>{"Mode: " + mode.current}</button>
                {showDropdown ? <Dropdown setMode={setMode} /> : null}
            </div>
        </div>
    )
}

export default ModesControl;