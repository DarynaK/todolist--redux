const initialState = 0;

export default function counter(state = initialState, action) {
    if (action.type === 'ADD_PLUS') {
        return action.number + 1;
    }else if (action.type === 'ADD_MINUS') {
        return action.number - 1;
    }
    return state;
}