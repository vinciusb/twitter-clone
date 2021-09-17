export default function UserReducer(state =
{
    name: 'Vinícius Braga Freire',
    at: 'vinciusb',
    color: 'rgb(0,155,155)',
},
action) {
    switch (action.type) {
    case 'SIGNIN':
        return {};
    default:
        return state;
    }
}
