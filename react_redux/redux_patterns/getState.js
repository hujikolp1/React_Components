const store = Redux.createStore(
    (state = 5) => state
  );
var currentState = store.getState();
console.log(currentState);