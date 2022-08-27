export const actionLengthPosts = (lengthPosts) => {
  return {
    type: "ACTION_LENGTH_POSTS",
    payload: lengthPosts,
  };
};

export const actionOpenModal = () => {
  return {
    type: "ACTION_OPEN_MODAL",
  };
};
export const actionCloseModal = () => {
  return {
    type: "ACTION_CLOSE_MODAL",
  };
};

export const actionData = (data) => {
  return {
    type: "ACTION_DATA",
    payload: data,
  };
};
export const actionUser = (dataUser) => {
  return {
    type: "ACTION_DATA_USER",
    payload: dataUser,
  };
};
export const actionFilter = (filter) => {
  return {
    type: "ACTION_FILTER",
    payload: filter,
  };
};
