import { useState } from 'react';
import MenuSelector from './Menus'
import './App.css'
import Scheduler from './scheduler/Scheduler'
import { createCalendarInfo, createPeopleList } from "./scheduler/scheduler-types";

function App() {
    const [CalendarInfo, setCalendarInfo] = useState(createCalendarInfo(0, 2026));
    const [People, setPeople] = useState(createPeopleList(5));

    return (
        <Scheduler People={People} CalendarInfo={CalendarInfo}/>
    )
}

export default App
