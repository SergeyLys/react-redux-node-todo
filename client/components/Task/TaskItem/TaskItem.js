import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default class TaskItem extends React.Component {
    shouldComponentUpdate(newprops) {
        return newprops.task != this.props.task;
    }

    render() {
        return(
            <div className='task-wrapper'>
                <Link to='/'>Back</Link>
                {
                    this.props.task
                    ?
                    <div className="task-inner">
                        <h1>{this.props.task ? this.props.task.title : ''}</h1>
                        <p>{this.props.task ? this.props.task.createdAt : ''}</p>
                        <p>{this.props.task ? this.props.task.body : ''}</p>
                        <p className={classnames("status", {'finished': this.props.task && this.props.task.complete})}>Status: <span>{this.props.task && this.props.task.complete ? 'Finished' : 'In propcess'}</span></p>
                    </div>
                    :
                    <div>
                        <h2>Task not found</h2>
                    </div>
                }
            </div>
        )
    }
}