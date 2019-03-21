const initState = {
  lastSeen: null
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case "updateLastSeen":
      return { ...state, lastSeen: action.payload };
    default:
      return state;
  }
};

export default chatReducer;
