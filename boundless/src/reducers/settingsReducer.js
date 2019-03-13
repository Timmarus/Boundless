const initState = {
  settings: null
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case "update_settings":
      console.log("updating settings");
      return { ...state, settings: action.payload };

    default:
      return state;
  }
};

export default settingsReducer;
