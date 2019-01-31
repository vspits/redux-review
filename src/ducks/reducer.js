let initialState = {
    name: '',
    age: '',
    email: '',
    phone: ''
}

const UPDATE_INFORMATION = 'UPDATE_INFORMATION';

export function updateInformation(information) {
    return {
        type: UPDATE_INFORMATION,
        payload: information
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_INFORMATION:
            return Object.assign({}, ...state, action.payload);
        default:
            return state;
    }
}