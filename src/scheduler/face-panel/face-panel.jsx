import ModesControl from "./modes-control";
import { VIEW_DEFAULT } from "../scheduler-types";

function FaceCard({ Person, view }) {
    const toggleViewPerson = () => {
        if (view.current === Person.id()) {
            view.set(VIEW_DEFAULT);
        } else {
            view.set(Person.id());
        }
    }

    return (
        <div className="face-card" onClick={toggleViewPerson}>
            <div></div>
            <div className="face-name">{Person.name()}</div>
        </div>
    )
}

function FacePanel({ People, mode, view }) {
    return (
        <div id="face-panel">
            <div id="face-cards">
                {People.getList().map((Person) => <FaceCard Person={Person} view={view} key={Person.id()} /> )}
            </div>
            <div>
                <ModesControl mode={mode} view={view} />
            </div>
        </div>
    )
}

export default FacePanel;