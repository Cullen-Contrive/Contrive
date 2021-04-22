// All Planners to display on admin page before filtering
const allPlannersReducer = (
  state = [
    {
      id: 0,
      firstName: '',
      lastName: '',
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_ALL_PLANNERS':
      return action.payload;
    default:
      return state;
  }
};

// allPlanners will be on the redux state at:
// state.allPlanners
export default allPlannersReducer;
