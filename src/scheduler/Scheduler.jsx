import FacePanel from './face-panel/face-panel'
import Calendar from './calendar/calendar';
import './scheduler.css'

function Scheduler({ SchedulerInfo }) {
    return (
        <div id="scheduler">
            <FacePanel peopleList={SchedulerInfo.people} />
            <Calendar duration={SchedulerInfo.duration} />
        </div>
    )
}

export default Scheduler;