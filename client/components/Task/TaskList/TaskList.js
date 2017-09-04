import React from 'react';
import TaskFormContainer from '../TaskForm/TaskFormContainer';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default class TaskList extends React.Component {

    render() {
        const taskItem = !this.props.tasks.tasks ? null : this.props.tasks.tasks.map((item, index) => {
            return (
                    <li key={index} className={classnames("task-item-row", {'finished': item.complete})}>
                        <p>
                            <Link to={`/tasks/${item._id}`}><span>{index+1}</span> {item.title} </Link>
                            <input type="checkbox" checked={item.complete} onChange={this.props.statusHandler.bind(null, item)}/>
                            <span className="remove-btn" onClick={this.props.removeHandler.bind(null, item)}>X</span>
                        </p>
                    </li>
            )
        });

        return (
            <div className="task-list">
                <TaskFormContainer/>
                <ul>{taskItem}</ul>
            </div>
        )
    }
}