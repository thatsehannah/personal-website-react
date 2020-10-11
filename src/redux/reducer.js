import * as actionTypes from "./actions";
import LightTheme from "../themes/LightTheme";
import DarkTheme from "../themes/DarkTheme";

const initialState = {
  mode: {
    modeName: "light",
    theme: LightTheme,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODE:
      if (action.payload.isLight === false) {
        return {
          mode: {
            modeName: "dark",
            theme: DarkTheme,
          },
        };
      } else {
        return {
          ...initialState,
        };
      }
    default:
      return state;
  }
};

export default reducer;
