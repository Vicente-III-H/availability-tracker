import { useState } from 'react';
import { createStateObject } from '../global';
import { VIEW_DEFAULT } from './scheduler-types';
import FacePanel from './face-panel/face-panel'
import Calendar from './calendar/calendar';

function Scheduler({ peopleList, CalendarInfo }) {
    const [view, setView] = useState(VIEW_DEFAULT);
    const viewStateObj = createStateObject(view, setView);

    const [mode, setMode] = useState("View");
    const modeStateObj = createStateObject(mode, setMode);

    return (
        <div id="scheduler">
            <FacePanel
                peopleList={peopleList}
                mode={modeStateObj}
                view={viewStateObj}
            />
            <Calendar
                peopleList={peopleList}
                CalendarInfo={CalendarInfo}
                mode={modeStateObj}
                view={viewStateObj}
            />
        </div>
    )
}

export default Scheduler;