const initState = {
  settings: null,
  courses: null
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case "update_settings":
      console.log("updating settings");
      return { ...state, settings: action.payload };

    case "update_courses":
      return { ...state, courses: action.payload };

    default:
      return state;
  }
};

export default settingsReducer;
