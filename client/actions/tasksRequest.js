import axios from 'axios';

export function taskListRequest() {
    return dispatch => {
        return axios.get('/api/tasks')
            .then(response => {
                dispatch({ type: 'FETCH_TASK_LIST', payload: response.data });
            });
    }
}

export function taskItemRequest(url) {
    return dispatch => {
        return axios.get(`/api/tasks/${url}`)
            .then(response => {
                dispatch({ type: 'FETCH_TASK_ITEM', payload: response.data })
            });
    }
}

export function createTaskRequest(data) {
    return dispatch => {
        return axios.post(`/api/tasks`, data)
            .then(response => {
                dispatch({ type: 'ADD_TASK', payload: response.data })
            });
    }
}

export function taskChangeRequest(url, data) {
    return dispatch => {
        return axios.put(`/api/tasks/${url}`, data)
            .then(response => {
                dispatch({ type: 'CHANGE_TASK', payload: response.data })
            });
    }
}

export function removeTask(id) {
    return dispatch => {
        return axios.delete(`/api/tasks/${id}`);
    }
}