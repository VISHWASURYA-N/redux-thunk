import type from "./type";

const value = {
  count: 0,
};
function counter(state = value, action) {
  switch (action.type) {
    case type.increment:
      return {
        count: state.count + 1,
      };
    case type.decrement:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
export default counter;
