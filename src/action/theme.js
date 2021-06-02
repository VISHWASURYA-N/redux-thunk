import type from "./type";

let theme = {
  isLightTheme: true,
  lightTheme: {
    background: "white",
    color: "black",
  },
  darkTheme: {
    background: "black",
    color: "white",
  },
};
function themeToggler(state = theme, action) {
  switch (action.type) {
    case type.toggle:
      return { ...state, isLightTheme: !state.isLightTheme };
    default:
      return state;
  }
}
export default themeToggler;
