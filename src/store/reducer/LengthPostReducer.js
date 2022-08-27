const LengthPostReducer = (state = 0, action) => {
  if (action.type === "ACTION_LENGTH_POSTS") {
    return action.payload;
  } else {
    return state;
  }
};

export default LengthPostReducer;
