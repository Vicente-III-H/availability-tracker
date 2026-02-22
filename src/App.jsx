import { useState } from 'react';
import MenuSelector from './Menus'
import './App.css'
import Scheduler from './scheduler/Scheduler'
import { CalendarData, PeopleList } from "./scheduler/scheduler-types";
import { createStateObject } from './global';

function App() {
    const [peopleList, setPeopleList] = useState(PeopleList.create(5));
    const peopleListStateObj = createStateObject(peopleList, setPeopleList);

    const [calendarData, setCalendarData] = useState(CalendarData.create(0, 2026));
    const calendarDataStateObj = createStateObject(calendarData, setCalendarData);

    return (
        <Scheduler peopleList={peopleListStateObj} calendarData={calendarDataStateObj}/>
    )
}

export default App
