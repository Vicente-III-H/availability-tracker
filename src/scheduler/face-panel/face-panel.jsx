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

function FacePanel({ People, view }) {
    return (
        <div id="face-panel">
            {People.getList().map((Person) => <FaceCard Person={Person} view={view} key={Person.id()} /> )}
        </div>
    )
}

export default FacePanel;