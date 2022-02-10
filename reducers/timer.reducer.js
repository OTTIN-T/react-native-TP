let initialState = {
  timers: 1,
};

let timersReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        timers: state.timers + action.payload,
      };
    default:
      return state;
  }
};

export default timersReducer;
