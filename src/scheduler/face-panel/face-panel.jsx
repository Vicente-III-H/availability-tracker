import { useState } from "react";
import ModesControl from "./modes-control";
import { PeopleList, VIEW_DEFAULT } from "../scheduler-types";
import './face-panel.css'

function FaceCard({ person, changeName, view }) {
    const [name, setName] = useState(person.getName());

    const currentlySelected = view.current === person.getId();

    const toggleViewPerson = () => {
        if (currentlySelected) {
            view.set(VIEW_DEFAULT);
        } else {
            view.set(person.getId());
        }
    }

    return (
        <div className={(currentlySelected ? "selected " : "") + "face-card"} onClick={toggleViewPerson}>
            <form onSubmit={(event) => {
                event.preventDefault();
                changeName(person.getId(), name, setName);
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
    const changeName = (personId, newName, callback) => {
        if (newName.trim() === "") { newName = "Person" }
        peopleList.set(PeopleList.changeNameOf(peopleList.current, personId, newName));
        callback(newName);
    }

    return (
        <div id="face-panel">
            <div id="face-cards">
                {peopleList.current.list().map((person) => <FaceCard person={person} changeName={changeName} view={view} key={person.getId()} /> )}
            </div>
            <div id="modes-control-container">
                <ModesControl getPerson={peopleList.current.getPerson} mode={mode} view={view} />
            </div>
        </div>
    )
}

export default FacePanel;