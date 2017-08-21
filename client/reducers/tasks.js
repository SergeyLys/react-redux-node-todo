const initialState = {
    tasks: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASK_LIST': {
            return {
                tasks: action.payload
            }
        }
        break;
        case 'FETCH_TASK_ITEM': {
            return [
                action.payload
            ]
        }
        break;
        case 'ADD_TASK': {
            return {
                tasks: [...state.tasks, action.payload]
            }
        }
        case 'CHANGE_TASK': {
            return {
                tasks: state.tasks.map(task => task._id === action._id 
                    ? { ...task, complete: action.complete } 
                    : task
                ) 
            };
        }
        break;
        default: return [...state];
    }
}