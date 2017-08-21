import React from 'react';
import TaskForm from './TaskForm';
import {connect} from 'react-redux';
import { createTaskRequest } from '../../actions/tasksRequest';

class TaskFormContainer extends React.Component {
    render() {
        return(
            <TaskForm createTaskRequest={this.props.createTaskRequest}/>
        )
    }
}

const mapStateToProps = state => ({
    tasksArray: state
});

export default connect(null, {createTaskRequest})(TaskFormContainer);