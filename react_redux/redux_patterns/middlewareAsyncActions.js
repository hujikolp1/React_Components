// Redux handles asynchronous actions with Thunk 
// ReduxThunk.default is passed into Redux.applyMiddleware() 
// as the second parameter of createStore() 

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch Request
    dispatch(requestingData())
    setTimeout(function() {
      let data = {
        users: ['A', 'B', 'C']
      }
      // Dispatch Receive 
      dispatch(receivedData(data))
    }, 2500);
  }

};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);


