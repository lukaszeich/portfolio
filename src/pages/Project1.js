import React from 'react'
import {Provider} from 'react-redux';

import {store} from '../store/store'

import Form from '../project1/Form'
import ListOfTasks from '../project1/ListOfTasks';

import '../css/Project1.css'

const Project1 = () => {
    return (
        <Provider store={store}>
        <div className='project1'>
          <h2>To-Do List application</h2>
          <Form/>  
          <ListOfTasks/>
        </div>
        </Provider>
    )
}

export default Project1;