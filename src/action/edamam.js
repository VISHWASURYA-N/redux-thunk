const value = {
  recipe: [],
};
function edamam(state = value, action) {
  switch (action.type) {
    case "recipes":
      return {
        recipe: action.payload.data,
      };
      default :return(state)
  }
}
export default edamam;
