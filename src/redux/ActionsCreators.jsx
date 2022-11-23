import * as Actions from "./ActionsTypes";

const addtache = (description) => {
  return {
    type: Actions.ADD_TASK,
    payload: description,
  };
};

const changetache = (id) => {
  return {
    type: Actions.CHANGE_TASK,
    payload: id,
  };
};

const deletetache = (id) => {
  return {
    type: Actions.DELETE_TASK,
    payload: id,
  };
};

const deletealltaches = () => {
  return {
    type: Actions.DELETEALL_TASK,
  };
};

const deletecompletedtaches = () => {
  return {
    type: Actions.DEL_COMPLETED_TASK,
  };
};

const deleteuncompletedtaches = () => {
  return {
    type: Actions.DEL_UNCOMPLETED_TASK,
  };
};

export {
  addtache,
  changetache,
  deletetache,
  deletealltaches,
  deletecompletedtaches,
  deleteuncompletedtaches,
};
