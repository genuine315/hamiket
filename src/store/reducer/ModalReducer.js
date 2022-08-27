const ModalReducer = (state = false, action) => {
  switch (action.type) {
    case "ACTION_OPEN_MODAL":
      return (state = true);
    case "ACTION_CLOSE_MODAL":
      return (state = false);
    default:
      return state;
  }
};
export default ModalReducer
