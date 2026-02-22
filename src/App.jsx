import { useState } from 'react';
import MenuSelector from './Menus'
import './App.css'
import Scheduler from './scheduler/Scheduler'
import { PeopleList, createCalendarInfo } from "./scheduler/scheduler-types";
import { createStateObject } from './global';

function App() {
    const [people, setPeople] = useState(PeopleList.create(5));
    const peopleStateObj = createStateObject(people, setPeople);

    const [CalendarInfo, setCalendarInfo] = useState(createCalendarInfo(0, 2026));

    return (
        <Scheduler people={peopleStateObj} CalendarInfo={CalendarInfo}/>
    )
}

export default App
