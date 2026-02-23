import { useState } from "react";
import ModesControl from "./modes-control";
import { PeopleList, VIEW_DEFAULT } from "../scheduler-types";
import './face-panel.css'

function FaceCard({ person, changeName, view }) {
    const [name, setName] = useState(person.getName());

    const toggleViewPerson = () => {
        if (view.current === person.getId()) {
            view.set(VIEW_DEFAULT);
        } else {
            view.set(person.getId());
        }
    }

    return (
        <div className={"face-card"} onClick={toggleViewPerson}>
            <form onSubmit={(event) => {
                event.preventDefault();
                changeName(person.getId(), name);
            }}>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => {setName(event.target.value)}}
                />
            </form>
        </div>
    )
}

function FacePanel({ peopleList, mode, view }) {
    const changeName = (personId, newName) => {
        console.log(newName);
        peopleList.set(PeopleList.changeNameOf(peopleList.current, personId, newName));
    }

    return (
        <div id="face-panel">
            <div id="face-cards">
                {peopleList.current.list().map((person) => <FaceCard person={person} changeName={changeName} view={view} key={person.getId()} /> )}
            </div>
            <div>
                <ModesControl mode={mode} view={view} />
            </div>
        </div>
    )
}

export default FacePanel;