import React from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import { taskItemRequest } from '../../actions/tasksRequest';

class TaskItemContainer extends React.Component {
    componentDidMount() {
        this.props.taskItemRequest(this.props.location.pathname.split('/').pop());
    }

    render() {
        return(
            <TaskItem taskItemRequest={this.props.taskItemRequest} task={this.props.task.tasks[0]} />
        )
    }
}

const mapStateToProps = state => ({
    task: state
});

export default connect(mapStateToProps, {taskItemRequest})(TaskItemContainer);