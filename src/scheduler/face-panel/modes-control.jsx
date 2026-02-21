import { severities } from "../scheduler-types";
import { VIEW_DEFAULT } from "../scheduler-types";

function DropdownDivider() {
    return (
        <div></div>
    )
}

function DropdownOption({ name, setMode }) {
    return (
        <button onClick={() => {setMode(name)}}>
            {name}
        </button>
    )
}

function ModesControl({ mode, view }) {
    const setMode = (value) => {
        mode.set(value);
        view.set(VIEW_DEFAULT);
    }

    return (
        <div>
            <div>{mode.current + " - " + view.current}</div>
            <div id="modes-dropdown">
                <button>{mode.current}</button>
                <div id="dropdown-options">
                    <DropdownOption name={"View"} setMode={setMode} />
                    <DropdownDivider />
                    {severities.toReversed().map((severity) => <DropdownOption name={severity} setMode={setMode} key={severity}/>)}
                    <DropdownDivider />
                    <DropdownOption name={"Free"} setMode={setMode} />
                </div>
            </div>
        </div>
    )
}

export default ModesControl;