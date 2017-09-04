const initialState = {
    user: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                user: action.payload
            };

        break;
        case 'DROP_CURRENT_USER':
            return {
                user: action.payload
            };

        break;

        default: return state;
    }
}