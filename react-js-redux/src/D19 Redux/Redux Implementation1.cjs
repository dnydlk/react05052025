// Redux Implementation1 Example in plain JavaScript

// Redux Library for React
// import redux from "redux"
// For Node.js App, you would use:
const redux = require("redux")

// Redux Library provides a store:
const createStore = redux.createStore // continue at line 57

// String constants to indicate the type of action
// This helps in avoiding typos and makes the code more maintainable
const BUY_CAKE = "BUY_CAKE"

// We define our action
// Its an object that has a type property
// other than type, it can have any other properties
{
  type: BUY_CAKE
  info: "First redux action"
}

// Action creator: a function that returns an action object
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  }
}

// Reducer: a function that takes the current state and an action
// and returns a new state

// the state is an object that has a property called numOfCakes
const initialState = {
  numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // If the action type matches BUY_CAKE, we return a new state
    // with numOfCakes decremented by 1
    // The spread operator (...) is used to copy the existing state
    // and then we modify the numOfCakes property
    // This is important because we should NOT mutate the state directly
    // Instead, we return a copy fo the state object and only change the necessary properties
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }

    // If the action type does not match any case, we return the current state
    default:
      return state
  }
}

// Responsibility#1: Redux Store holds application state
// param: reducer function which controls how the state is updated
const store = createStore(reducer)

// Responsibility#2: Redux Store allows access to state via getState()
console.log("Initial State", store.getState())

// Responsibility#4: Redux Store allows application to register listeners via subscribe(listenerFn)
store.subscribe(() => console.log("Updated State", store.getState()))
// Any time the state is updated, the listener function will be called
// This is useful for logging, debugging, or updating the UI

// Responsibility#3: Redux Store allows state to be updated via dispatch(action)
store.dispatch(buyCake()) // invoke the action creator to get the action object
store.dispatch(buyCake()) // Just to cause a few more state updates
store.dispatch(buyCake()) // Just to cause a few more state updates

// Responsibility#5: Redux Store allows us to unsubscribe from the store
// We can actuaaly put const unsubscribe to line 65 and call it later,
// but for the sake of Responsibility#5 example, we will do it here.
const unsubscribe = store.subscribe(() =>
  console.log("Updated State after unsubscribe", store.getState())
)
// Unsubscribe from the store
unsubscribe()
