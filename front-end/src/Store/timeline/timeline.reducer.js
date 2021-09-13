export default function TimeLineReducer(state = [], action) {
    switch (action.type) {
    case 'PUBLISH':
        return action.payload[0] + action.payload[1];
    default:
        return state;
    }
}
