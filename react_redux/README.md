# React Redux Boilers
This repo is for all things React Redux. 

## App Setup 
``
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
```

### Redux Patterns 
* ```action = {type:'LOGIN'}```
* ```actionCreatr = () => action```
* ```reducer = (state='default') => state```
* ```var store = Redux.createStore(reducer)```
* ```store.dispatch(actionCreator())```
* ```store.getState()``` 

### Reducers
Reducers are pure functions (they only return output based on input, without altering the state or memory of the input). <br>
Redcuers take in state and action and return the new state. In this way state is immutable. 

### Actions 
Actions are objects that have 'type' keys and values for the type of action. Action Creators are functions that return the appropriate action object. 

### Store 
Store is the 'single source of truth' in Redux. Simply, it is the top level state and the only one. You create a store by passing in the reducer or combined reducers. 

### Dispatch
Dispatching sends an Action Creator function to the store so the state may be mutated. 

### Get State
To get the current state of the Redux Store, you can use the store.getState() method. 

### More Complex Reducers 
It is common to have control flow logic or switch statements in your reducer to handle various scenarios. For example, your reducer might look like this: <br> 
```
const reducer = (state = {}, action) => {
    if(action.type === 'LOGIN'){
        return state={login:true}
    } else {
        return state;
    }
};
```
or <br>
```
const authReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'LOGIN':
            return state={authenticated:true}
        case 'LOGOUT':
            return state={authenticated:false}
        default:
            return state 
    }
};
```
### Asynchronous Redux
Often you will need to await data from an outside API in your reducer for things like login or posting messages. Redux Thunk handles this: <br>
```
Redux.applyMiddleware(ReduxThunk.default)
```

### Multiple Reducers 
Redux Store only takes one reducer argument, so multiple reducers can be combined into one function: <br> 
```
const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer 
})
```



