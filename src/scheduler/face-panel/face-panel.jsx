function FaceCard({ name }) {
    return (
        <div>
            {name}
        </div>
    )
}

function FacePanel({ peopleList }) {
    return (
        <div id="face-panel">
            {peopleList.map((person) => <FaceCard name={person.name} key={person.getKey()} /> )}
        </div>
    )
}

export default FacePanel;