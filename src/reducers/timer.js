
const initialState = {
    timer: 5,

};

export default function timer(state = initialState, action) {
    switch (action.type) {
    case 'SET_START':
        console.log('start');
        return { ...state, timer };

    case 'GAME_STATE':
        console.log(action.payload, 'payload');
        // checkedCard.push(action.payload);

        return { ...state, gameState: action.payload };

    case 'SET_END':

        console.log(action.payload, 'payload');
        return { ...state, end: action.payload };

    default:

        return state;
    }
}
