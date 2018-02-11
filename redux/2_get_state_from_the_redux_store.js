const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState();
