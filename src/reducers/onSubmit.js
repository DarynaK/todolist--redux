const initialState = {};

export default function onSubmit(state = initialState, action) {
    if (action.type === 'SUBMIT') {
        return action.values
        ;
    }
    return state;
}