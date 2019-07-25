
const initialState = {
    timer: 81,

};

export default function timer(state = initialState, action) {
    switch (action.type) {
    case 'SET_START':
        return { ...state, timer };

    case 'GAME_STATE':

        return { ...state, gameState: action.payload };

    case 'SET_END':

        return { ...state, end: action.payload };

    default:

        return state;
    }
}
