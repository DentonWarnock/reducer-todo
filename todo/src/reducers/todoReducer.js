export const initialState = [
    {
        item: '',
        completed: false,
        id: 3892987589
    }
];

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {item: action.payload, id: Date.now(), completed: false}]
        case 'MARK_COMPLETED':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        default:
            return state;
    }
         
}