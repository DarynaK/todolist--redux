const initialState = [
    'My home track',
    'My work track'
];

export default function tracks(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'DELETE_TRACK') {
        return state;
    }
    return state;
}