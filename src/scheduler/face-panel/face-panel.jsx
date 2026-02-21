function FaceCard({ name }) {
    return (
        <div>
            {name}
        </div>
    )
}

function FacePanel({ People }) {
    return (
        <div id="face-panel">
            {People.getList().map((person) => <FaceCard name={person.name} key={person.getKey()} /> )}
        </div>
    )
}

export default FacePanel;