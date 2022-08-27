const UserReducer = (state = {}, action) => {
  if (action.type === "ACTION_DATA_USER") {
    return action.payload;
  } else {
    return state;
  }
};
export default UserReducer;
