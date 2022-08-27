const FilterReducer = (state = null, action) => {
  if (action.type === "ACTION_FILTER") {
    return action.payload;
  } else {
    return state;
  }
};
export default FilterReducer