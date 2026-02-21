import { useState } from 'react';
import { createStateObject } from '../global';
import { VIEW_DEFAULT } from './scheduler-types';
import FacePanel from './face-panel/face-panel'
import Calendar from './calendar/calendar';
import './scheduler.css'

function Scheduler({ People, CalendarInfo }) {
    const [view, setView] = useState(VIEW_DEFAULT);
    const viewStateObj = createStateObject(view, setView);

    const [mode, setMode] = useState("View");
    const modeStateObj = createStateObject(mode, setMode);

    return (
        <div id="scheduler">
            <FacePanel
                People={People}
                mode={modeStateObj}
                view={viewStateObj}
            />
            <Calendar
                People={People}
                CalendarInfo={CalendarInfo}
                view={viewStateObj}
            />
        </div>
    )
}

export default Scheduler;