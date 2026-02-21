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

function ModesControl({ mode, view }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const setMode = (value) => {
        setShowDropdown(false);
        mode.set(value);
        view.set(VIEW_DEFAULT);
    }

    return (
        <div id="modes">
            <div>{mode.current + " - " + view.current}</div>
            <div className="dropdown">
                <button onClick={toggleDropdown}>{mode.current}</button>
                {showDropdown ? <Dropdown setMode={setMode} /> : null}
            </div>
        </div>
    )
}

export default ModesControl;