import axios from 'axios';

export function currentUserRequest(token) {
    return dispatch => {
        if (token)
            return axios.get('/api/current-user', { headers: { Authorization: token }})
                .then((response) => {
                    dispatch({type: 'GET_USER', payload: response.data.login});
                });
    }
}

export function signupRequest(data) {
    return dispatch => {
        return axios.post('/api/signup');
    }
}