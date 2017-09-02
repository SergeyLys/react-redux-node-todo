import React from 'react';
import { connect } from 'react-redux';
import { taskListRequest, removeTask, taskChangeRequest } from '../../actions/tasksRequest';
import TaskList from './TaskList';

class TaskListContainer extends React.Component {
    componentDidMount() {
        this.props.taskListRequest();
    }

    removeHandler(task) {
        this.props.removeTask(task._id).then(()=>{
            this.props.taskListRequest();
        });
    }

    statusHandler(task) {
        task.complete = !task.complete;
        this.props.taskChangeRequest(task._id, task);
    }

    shouldComponentUpdate(newprops) {
        if (this.props.tasksArray.tasks || this.props.tasksArray.tasks[0]) {
            return this.props.tasksArray.tasks || this.props.tasksArray.tasks[0] === newprops.tasksArray.tasks[0].length
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
    tasksArray: state
});

export default connect(mapStateToProps, {
    taskListRequest,
    removeTask,
    taskChangeRequest
})(TaskListContainer);
