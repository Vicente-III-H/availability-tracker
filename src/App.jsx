import { useState } from 'react';
import MenuSelector from './Menus'
import './App.css'
import Scheduler from './scheduler/Scheduler'
import { PeopleList, createCalendarInfo } from "./scheduler/scheduler-types";
import { createStateObject } from './global';

function App() {
    const [peopleList, setPeopleList] = useState(PeopleList.create(5));
    const peopleListStateObj = createStateObject(peopleList, setPeopleList);

    const [CalendarInfo, setCalendarInfo] = useState(createCalendarInfo(0, 2026));

    return (
        <Scheduler peopleList={peopleListStateObj} CalendarInfo={CalendarInfo}/>
    )
}

export default App
