const initialState = {
    name: '',
    age: '',
    email: '',
    phoneNumber: ''
}

const UPDATE_EVERYTHING = 'UPDATE_EVERYTHING'

export function updateEverything(everything){
    return {
        type: UPDATE_EVERYTHING,
        payload: everything
    }
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case UPDATE_EVERYTHING: 
            return Object.assign({}, state, action.payload)
        default: 
            return state
    }
}