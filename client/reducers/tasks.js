const initialState = {
    tasks: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASK_LIST': {
            return {
                ...state,
                tasks: action.payload
            }
        }
        break;
        case 'FETCH_TASK_ITEM': {
            return [
                ...state,
                action.payload
            ]
        }
        break;
        case 'ADD_TASK': {
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        }
        case 'CHANGE_TASK': {
            return {
                ...state,
                tasks: state.tasks.map(task => task._id === action._id 
                    ? { ...task, complete: action.complete } 
                    : task
                ) 
            };
        }
        break;
        default: return state;
    }
}