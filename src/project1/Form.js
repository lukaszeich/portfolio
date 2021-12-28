import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addTask} from '../actions/toDoAppActions'

const Form = ({addTask}) => {

    const minDate = new Date().toISOString().slice(0,10);
    let maxDate = minDate.slice(0,4) * 1 + 1
    maxDate = maxDate + "-12-31";

    const [task, setTask] = useState("");
    const [date, setDate] = useState(minDate);

    const handleInputChange = e => {
        setTask(e.target.value);
    }

    const handleDateChange = e => {
        setDate(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (task === "") return alert("Please, put the name of the Task!");

        const taskObject = {
            name: task,
            date,
        };
        
        addTask(taskObject);
        setTask("");
        setDate(minDate);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Task name: 
                <input
                    onChange={handleInputChange}
                    type="text"
                    value={task}
                    placeholder='Input name of the Task...'
                >
                </input>
            </label>
            <label>Due date: 
                <input
                    onChange={handleDateChange}
                    type="date"
                    value={date}
                    min={minDate}
                    max={maxDate}
                >
                </input>
            </label>
            <button type="submit" className='submitTask'>Add Task</button>
        </form>
    );
};

const connectActionsToProps = ({
    addTask,
});

const connectedForm = connect(null, connectActionsToProps)(Form)

export default connectedForm;