export default function setCheckedCardAction(cardId) {
    return {
        type: 'CHECK_CARD',
        payload: cardId,
    };
}
