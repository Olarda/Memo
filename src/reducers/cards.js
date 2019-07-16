const cardArr = [
    {
        img: 'bear',
        flip: false,
    },
    {
        img: 'unicorn',
        flip: false,
    },
    {
        img: 'deer',
        flip: false,
    },
    {
        img: 'fox',
        flip: false,
    },
    {
        img: 'hedgehog',
        flip: false,
    },
    {
        img: 'penguin',
        flip: false,
    },
    {
        img: 'polar-bear',
        flip: false,
    },
    {
        img: 'rabbit',
        flip: false,
    },
    {
        img: 'bear',
        flip: false,
    },
    {
        img: 'unicorn',
        flip: false,
    },
    {
        img: 'deer',
        flip: false,
    },
    {
        img: 'fox',
        flip: false,
    },
    {
        img: 'hedgehog',
        flip: false,
    },
    {
        img: 'penguin',
        flip: false,
    },
    {
        img: 'polar-bear',
        flip: false,
    },
    {
        img: 'rabbit',
        flip: false,
    },
];

let count = 1;
const randomArr = cardArr;
randomArr.forEach((item) => {
    item.id = count;
    count++;
});

// randomArr = randomArr.sort(function(){ return 0.5-Math.random() });

const initialState = {
    cards: randomArr,
    card: '',
};

let prev;
let clickCardArr = [];
const checkedCard = [];
let prevCardId;

export default function cardsData(state = initialState, action) {
    switch (action.type) {
    case 'SET_CARD':

        let equal = false;

        clickCardArr.push(action.cardId);

        if (action.payload === prev && prevCardId !== action.cardId) {
            equal = true;
        } else {
            prev = action.payload;
            equal = false;
        }

        prevCardId = action.cardId;

        return {
            ...state, card: action.payload, equal, clickCardArr, cardId: action.cardId,
        };

    case 'CHECK_CARD':

        checkedCard.push(action.payload);

        return { ...state, checkedCard };

    case 'CLEAN_CARD':

        clickCardArr = clickCardArr.slice(2);

        return { ...state, clickCardArr };

    default:
        return state;
    }
}
