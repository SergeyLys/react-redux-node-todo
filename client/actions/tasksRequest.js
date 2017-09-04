import axios from 'axios';

export function taskListRequest(token) {
    return dispatch => {
        return axios.get('/api/tasks', { headers: { Authorization: token }})
            .then(response => {
                dispatch({ type: 'FETCH_TASK_LIST', payload: response.data });
            });
    }
}

export function taskItemRequest(url, token) {
    return dispatch => {
        return axios.get(`/api/tasks/${url}`, { headers: { Authorization: token }})
            .then(response => {
                dispatch({ type: 'FETCH_TASK_ITEM', payload: response.data });
            });
    }
}

export function createTaskRequest(data, token) {
    return dispatch => {
        return axios.post(`/api/tasks`, data, { headers: { Authorization: token }})
            .then(response => {
                dispatch({ type: 'ADD_TASK', payload: response.data });
            });
    }
}

export function taskChangeRequest(url, data, token) {
    return dispatch => {
        return axios.put(`/api/tasks/${url}`, data,  { headers: { Authorization: token }})
            .then(response => {
                dispatch({ type: 'CHANGE_TASK', payload: response.data });
            });
    }
}

export function removeTask(id, token) {
    return dispatch => {
        return axios.delete(`/api/tasks/${id}`, { headers: { Authorization: token }});
    }
}