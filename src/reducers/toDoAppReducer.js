import { ADD, DELETE, FINISH } from '../actions/toDoAppActions'

export const toDoAppReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case DELETE:
            return state.filter(task => task.id !== action.payload.id);
        case FINISH:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    task.active = !task.active
                    task.finishDate = new Date().toISOString().slice(0,10)
                };
                return task
            })
        default:
            console.warn(`Brak akcji typu: ${action.type}`);
            return state;
    }
}
