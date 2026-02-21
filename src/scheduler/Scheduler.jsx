import { useState } from 'react';
import { createStateObject } from '../global';
import { VIEW_DEFAULT } from './scheduler-types';
import FacePanel from './face-panel/face-panel'
import Calendar from './calendar/calendar';

function Scheduler({ people, CalendarInfo }) {
    const [view, setView] = useState(VIEW_DEFAULT);
    const viewStateObj = createStateObject(view, setView);

    const [mode, setMode] = useState("View");
    const modeStateObj = createStateObject(mode, setMode);

    return (
        <div id="scheduler">
            <FacePanel
                people={people}
                mode={modeStateObj}
                view={viewStateObj}
            />
            <Calendar
                people={people}
                CalendarInfo={CalendarInfo}
                view={viewStateObj}
            />
        </div>
    )
}

export default Scheduler;