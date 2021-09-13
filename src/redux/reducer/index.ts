export function counter(state = 0, action) {
    console.log('counter', state, action);
    switch (action.type) {
        case 'increment':
            return state + action.number;
        default:
            return state;
    }
}
