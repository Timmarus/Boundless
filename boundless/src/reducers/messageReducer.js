const initialState = {
    msg: ''
}

const messageReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'new_message':
            return { ...state, msg: action.payload}
            break;
        default:
            return state
    }
}

export default messageReducer
