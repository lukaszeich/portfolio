import React from 'react';
import { connect } from 'react-redux';

import TaskToDo from './TaskToDo'

const ListOfTasks = ({tasks}) => {

    const activeElements = tasks.filter(task => task.active);
    const finishedElements = tasks.filter(task => !task.active);

    const activeTasksElements = activeElements.map(task => <TaskToDo key={task.id} {...task}/>);
    const finishedTasksElements = finishedElements.map(task => <TaskToDo key={task.id} {...task}/>);

    return (
        <div className='listOfTasks'>
            <ul className='activeTasks'>
                <li><h2>Tasks to do</h2></li>
                {activeTasksElements}
            </ul>
            <ul className='doneTasks'>
            <li><h2>Finished tasks</h2></li>
                {finishedTasksElements}
            </ul>
        </div>
    )
}

const connectReduxStateToProps = store => ({
    tasks: store.project1
})

const connectedList = connect(connectReduxStateToProps)(ListOfTasks)

export default connectedList;