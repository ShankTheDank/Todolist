import React, { Component } from 'react';
import './taskManager.css';
import Del from './Assets/delLogo.png';
class TaskManager extends Component {

    constructor(props) {
        super(props);

        this.createLiTask = this.createLiTask.bind(this);
    }

    state = {}



    createLiTask(task) {

        return (
            <li
                key={task.key} >{task.task}
                <img src={Del} alt="delete" onClick={() => { this.props.delete(task.key) }} />
            </li>
        )
    }


    render() {
        let taskList = this.props.entries;
        let liTask = taskList.map(this.createLiTask);
        return (
            <ul>
                {liTask}
            </ul>

        );
    }
}

export default TaskManager;