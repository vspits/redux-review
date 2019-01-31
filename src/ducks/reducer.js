let initialState = {
    name: '',
    age: '',
    email: '',
    phone: '',
    cardList: []
}

const UPDATE_INFORMATION = 'UPDATE_INFORMATION';
const DELETE_INFORMATION = 'DELETE_INFORMATION';
const ADD_CARD = 'ADD_CARD';

export function updateInformation(information) {
    return {
        type: UPDATE_INFORMATION,
        payload: information
    }
}

export function deleteInformation() {
    return {
        type: DELETE_INFORMATION,
        payload: initialState
    }
}

export function addCard(card) {
    return {
        type: ADD_CARD,
        payload: card
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_INFORMATION:
            return Object.assign({}, {...state}, action.payload);
        case DELETE_INFORMATION:
            return Object.assign({}, action.payload)
        case ADD_CARD:
            let arr = state.cardList.slice();
            arr.push(action.payload);
            let obj = Object.assign({}, {...state}, {cardList: arr});
            return obj;
        default:
            return state;
    }
}