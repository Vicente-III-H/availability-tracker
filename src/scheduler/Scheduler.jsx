import { useState } from 'react';
import { createStateObject } from '../global';
import FacePanel from './face-panel/face-panel'
import Calendar from './calendar/calendar';
import './scheduler.css'

function Scheduler({ People, CalendarInfo }) {
    const [viewAvailability, setViewAvailability] = useState("All");

    return (
        <div id="scheduler">
            <FacePanel People={People} />
            <Calendar
                People={People}
                CalendarInfo={CalendarInfo}
                viewAvailability={createStateObject(viewAvailability, setViewAvailability)}
            />
        </div>
    )
}

export default Scheduler;