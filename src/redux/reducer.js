import * as actionTypes from "./actions";
import LightTheme from "../themes/LightTheme";
import DarkTheme from "../themes/DarkTheme";

const hour = new Date().getHours();

const initialState = {
  mode:
    hour >= 19 || hour <= 6
      ? { modeName: "dark", theme: DarkTheme }
      : { modeName: "light", theme: LightTheme },
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
