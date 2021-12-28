export const ADD = "ADD";
export const DELETE = "DELETE";
export const FINISH = "FINISH";

export const addTask = ({name, date}) => ({
type: ADD,
payload: {
    id: Math.floor(Math.random() * 100000000),
    name,
    date,
    active: true,
    finishDate: null
}
})

export const finishTask = ({id}) => ({
    type: FINISH,
    payload: {
        id
    }
})

export const deleteTask = ({id}) => ({
    type: DELETE,
    payload: {
        id
    }
})