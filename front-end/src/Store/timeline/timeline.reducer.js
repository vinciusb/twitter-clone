export default function TimelineReducer(state = [], action) {
    switch (action.type) {
    case 'PUBLISH':
        return [...state, action.payload];
    default:
        return state;
    }
}
