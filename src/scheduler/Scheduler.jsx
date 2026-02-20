function FaceCard({ name }) {
    return (
        <div>
            {name}
        </div>
    )
}

function FacePanel({ peopleList }) {
    return (
        <div>
            {peopleList.map((person) => <FaceCard name={person.name} key={person.getKey()} /> )}
        </div>
    )
}

function Calendar() {
    return (
        <div>
            
        </div>
    )
}

function Scheduler({ SchedulerInfo }) {
    return (
        <div>
            <FacePanel peopleList={SchedulerInfo.people} />
            <Calendar />
        </div>
    )
}

export default Scheduler;