const DataReducer = (state = {}, action) => {
  if (action.type === "ACTION_DATA") {
    return (state = action.payload);
  } else {
    return state;
  }
};
export default DataReducer;
