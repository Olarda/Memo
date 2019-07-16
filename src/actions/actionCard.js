export default function setCardAction(card, id) {
    return {
        type: 'SET_CARD',
        payload: card,
        cardId: id,
    };
}
