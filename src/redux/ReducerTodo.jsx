import * as Actions from "./ActionsTypes";

const initial_state = {
  lastid: 3,
  tasks: [
    {
      id: 1,
      task: "Reviser Javascript",
      completed: false,
    },
    {
      id: 2,
      task: "Reviser Javas",
      completed: true,
    },
    {
      id: 3,
      task: "Reviser Python",
      completed: true,
    },
  ],
};

const ReducerTodo = (state = initial_state, action) => {
  switch (action.type) {
    case Actions.ADD_TASK:
      return {
        ...state,
        lastid: state.lastid + 1,
        tasks: [
          ...state.tasks,
          { id: state.lastid + 1, task: action.payload, completed: false },
        ],
      };
    case Actions.CHANGE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id == action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case Actions.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id != action.payload),
      };
    case Actions.DELETEALL_TASK:
        return {
            ...state,
            tasks: [],
          };
    case Actions.DEL_COMPLETED_TASK:
        return {
            ...state,
            tasks: state.tasks.filter((item) => item.completed),
          };
    case Actions.DEL_UNCOMPLETED_TASK:
        return {
            ...state,
            tasks: state.tasks.filter((item) => !item.completed),
          };
  }
  return state;
};

export default ReducerTodo;
