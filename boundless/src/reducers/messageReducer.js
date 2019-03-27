const initialState = {
    msg: ''
}

const messageReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'new_message':
            return { ...state, msg: action.payload}
        default:
            return state
    }
}

export default messageReducer
