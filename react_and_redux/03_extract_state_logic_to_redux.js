const ADD = 'ADD';

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.message]
      break;
    default:
      return state;
  }
}

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const store = Redux.createStore(messageReducer)
