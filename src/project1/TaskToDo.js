import React from 'react';
import { connect } from 'react-redux';
import {finishTask, deleteTask} from '../actions/toDoAppActions'

const TaskToDo = ({name, date, id, finishTask, active, deleteTask, finishDate}) => {
    if (active) {
        return (
            <li className='active'>
                <p className='taskID'>ID: {id}</p>
                <p className='taskName'>Task name: {name}</p>
                <p className='taskDate'>Due date: {date}</p>
                <button className='finishTask' onClick={()=>finishTask({id})}>Finished</button>
                <button className='deleteTask' onClick={()=>deleteTask({id})}>Delete</button>
            </li>
        )
    } else {
        return (
            <li className='finished'>
                <p className='taskID'>ID: {id}</p>
                <p className='taskName'>Task name: {name}</p>
                <p className='taskDate'>Finish date: {finishDate}</p>
            </li>
        )
    }
    
}

const connectButtonActionsToProps = ({
    finishTask,
    deleteTask
});

const connectedButton = connect(null, connectButtonActionsToProps)(TaskToDo)

export default connectedButton;
