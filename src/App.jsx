import { useState } from 'react';
import MenuSelector from './menus/Menus'
import Scheduler from './scheduler/Scheduler'
import { MenuNames, Menus } from './menus/menu-types';
import { CalendarData, PeopleList } from "./scheduler/scheduler-types";
import { createStateObject } from './global';
import './App.css'

function App() {
    const [menu, setMenu] = useState(Menus.first());

    const [peopleList, setPeopleList] = useState(PeopleList.create(5));
    const peopleListStateObj = createStateObject(peopleList, setPeopleList);

    const [calendarData, setCalendarData] = useState(CalendarData.create(0, 2026));
    const calendarDataStateObj = createStateObject(calendarData, setCalendarData);

    if (menu === MenuNames.Scheduler) {
        return <Scheduler peopleList={peopleListStateObj} calendarData={calendarDataStateObj}/>
    } else {
        return <MenuSelector menu={menu} setMenu={setMenu} />
    }
}

export default App
