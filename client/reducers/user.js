const initialState = {
    user: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                user: action.payload
            };

        break;

        default: return state;
    }
}