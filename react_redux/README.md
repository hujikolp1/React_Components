# React Redux Boilers

### Redux Patterns 
* ```action = {type:'LOGIN'}```
* ```actionCreatr = () => action```
* ```reducer = (state='default') => state```
* ```var store = Redux.createStore(reducer)```
* ```store.dispatch(actionCreator())```
* ```store.getState()``` 

### Reducers
Reducers are pure functions (they only return output based on input, without altering the state or memory of the input). <br>
Redcuers take in state and action and return the new state. 

### Actions 
Actions are objects that have 'type' keys and values for the type of action. Action Creators are functions that return the appropriate action object. 

### Store 
Store is the 'single source of truth' in Redux. Simply, it is the top level state and the only one. You create a store by passing in the reducer or combined reducers. 

### Dispatch
Dispatching sends an Action Creator function to the store so the state may be mutated. 

### Get State
To get the current state of the Redux Store, you can use the store.getState() method. 



