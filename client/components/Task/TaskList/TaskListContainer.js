import React from 'react';
import { connect } from 'react-redux';
import { taskListRequest, removeTask, taskChangeRequest } from '../../../actions/tasksRequest';
import checkToken from '../../../common/checkToken';
import TaskList from './TaskList';
import { Switch, Route } from 'react-router-dom';

class TaskListContainer extends React.Component {
    componentDidMount() {
        this.props.taskListRequest(checkToken('todotoken'));
    }

    removeHandler(task) {
        this.props.removeTask(task._id, checkToken('todotoken')).then(()=>{
            this.props.taskListRequest(checkToken('todotoken'));
        });
    }

    statusHandler(task) {
        task.complete = !task.complete;
        this.props.taskChangeRequest(task._id, task, checkToken('todotoken'));
    }

    shouldComponentUpdate(newprops) {
        if (this.props.tasksArray || this.props.tasksArray.tasks[0]) {
            return this.props.tasksArray || this.props.tasksArray.tasks[0] === newprops.tasksArray.tasks[0].length
        } else {
            return false;
        }
    }

    render() {
        return(
            <TaskList statusHandler={::this.statusHandler} removeHandler={::this.removeHandler} tasks={this.props.tasksArray}/>
        )
    }
}

const mapStateToProps = state => ({
    tasksArray: state.tasks
});

export default connect(mapStateToProps, {
    taskListRequest,
    removeTask,
    taskChangeRequest
})(TaskListContainer);
