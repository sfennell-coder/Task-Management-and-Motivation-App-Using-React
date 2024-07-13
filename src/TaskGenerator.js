import React from 'react';
import useState from 'react';
import tasks from './task.js';
import FancyText from './FancyText';

export default function TaskGenerator(){
    const [index, setIndex] = useState(0);
    const handleNextTask=()=>{
        setIndex((TaskIndex+1)%tasks.length);
    }
    const handleIsCompletedTask=()=>{
        tasks[index].isCompleted = true;
        setIndex((index+1)%tasks.length);
    }

    return(
        <div className='TaskGenerator'>
            <h2>Tasks:</h2>
            <p>{tasks[index].name}</p>
            <p>Current status: {tasks[index].isCompleted ? 'Completed ✅' : 'Pending...'}</p>
            <button onClick={handleIsCompletedTask}>Checked as Completed!</button>
            <button onClick={handleNextTask}>Next Task</button>
            <FancyText title='false' text='Almost there... few more to go! Keep pushing!'/>
        </div>
    )
}