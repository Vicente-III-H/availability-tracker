import { useState } from 'react';
import MenuSelector from './Menus'
import './App.css'
import Scheduler from './scheduler/Scheduler'
import { PeopleList, createCalendarInfo } from "./scheduler/scheduler-types";

function App() {
    const [people, setPeople] = useState(PeopleList.create(5));
    const [CalendarInfo, setCalendarInfo] = useState(createCalendarInfo(0, 2026));

    return (
        <Scheduler people={people} CalendarInfo={CalendarInfo}/>
    )
}

export default App
