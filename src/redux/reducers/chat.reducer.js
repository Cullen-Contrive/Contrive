const chatReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE_TO_CHAT':
      return [...state, action.payload];
    case 'SET_MESSAGES':
      return action.payload;
    default:
      return state;
  }
};

export default chatReducer;
