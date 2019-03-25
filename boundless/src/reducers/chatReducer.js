const initState = {
  lastSeen: null,
  searchText: [],
  searchEnable: 0
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case "updateLastSeen":
      return { ...state, lastSeen: action.payload };
    case "search_messages":
      return{
        ...state, searchText: action.payload.msgs, searchEnable: action.payload.searchEnable
      }
    default:
      return state;
  }
};

export default chatReducer;
