export default function setGameStateAction(state) {
    return {
        type: 'GAME_STATE',
        payload: state,
    };
}
