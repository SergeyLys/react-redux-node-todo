import React from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import { taskItemRequest } from '../../../actions/tasksRequest';
import checkToken from '../../../common/checkToken';

class TaskItemContainer extends React.Component {
    componentDidMount() {
        this.props.taskItemRequest(this.props.location.pathname.split('/').pop(), checkToken('todotoken'));
    }

    render() {
        return(
            <TaskItem taskItemRequest={this.props.taskItemRequest} task={this.props.task} />
        )
    }
}

const mapStateToProps = state => ({
    task: state.tasks[0]
});

export default connect(mapStateToProps, {taskItemRequest})(TaskItemContainer);