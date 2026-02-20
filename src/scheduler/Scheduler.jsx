import './scheduler.css'

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

function Calendar({ duration }) {
    return (
        <div id="calendar">
            <div>{duration.getMonthName()}</div>
            <div></div>
        </div>
    )
}

function Scheduler({ SchedulerInfo }) {
    return (
        <div id="scheduler">
            <FacePanel peopleList={SchedulerInfo.people} />
            <Calendar duration={SchedulerInfo.duration} />
        </div>
    )
}

export default Scheduler;