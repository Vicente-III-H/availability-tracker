import ModesControl from "./modes-control";
import { VIEW_DEFAULT } from "../scheduler-types";
import './face-panel.css'

function FaceCard({ person, view }) {
    const toggleViewPerson = () => {
        if (view.current === person.getId()) {
            view.set(VIEW_DEFAULT);
        } else {
            view.set(person.getId());
        }
    }

    return (
        <div className="face-card" onClick={toggleViewPerson}>
            <div></div>
            <div className="face-name">{person.getName()}</div>
        </div>
    )
}

function FacePanel({ peopleList, mode, view }) {
    return (
        <div id="face-panel">
            <div id="face-cards">
                {peopleList.current.list().map((person) => <FaceCard person={person} view={view} key={person.getId()} /> )}
            </div>
            <div>
                <ModesControl mode={mode} view={view} />
            </div>
        </div>
    )
}

export default FacePanel;