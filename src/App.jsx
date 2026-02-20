import MenuSelector from './Menus'
import './App.css'
import Scheduler from './scheduler/Scheduler'
import { createSchedulerInfo } from './scheduler/scheduler-types'

function App() {
    const testInfo = createSchedulerInfo(5, 1, 2026);

    return (
        <Scheduler SchedulerInfo={testInfo} />
    )
}

export default App
