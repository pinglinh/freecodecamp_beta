const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return state = {
        authenticated: true
      }
      break;
  
    case 'LOGOUT':
      return state = {
        authenticated: false        
      }
      break;
    default:
      return state
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
