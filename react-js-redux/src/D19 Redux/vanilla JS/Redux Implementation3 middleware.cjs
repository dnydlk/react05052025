// Redux Implementation3 Example
// With redux-logger middleware for debugging

const redux = require("redux")

// Import redux-logger for logging actions and state changes
const reducLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducers = redux.combineReducers
// Import applyMiddleware to use middleware like redux-logger
const applyMiddleware = redux.applyMiddleware
// Create a logger instance from redux-logger
const logger = reducLogger.createLogger()

const BUY_CAKE = "BUY_CAKE"
const BUY_ICE_CREAM = "BUY_ICE_CREAM"

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  }
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: "Second redux action",
  }
}

const InitialCakeState = {
  numOfCakes: 10,
}
const InitialIceCreamState = {
  numofIceCreams: 20,
}

const cakeReducer = (state = InitialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }

    default:
      return state
  }
}

const iceCreamReducer = (state = InitialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

// createStore takes two parameters: the root reducer and middleware
// Here we use applyMiddleware to apply the logger middleware
const store = createStore(rootReducer, applyMiddleware(logger))

console.log("Initial State", store.getState())

// console.log("Updated State", store.getState() is removed because the logger middleware will automatically log state changes)
const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyIceCream())

console.log("numOfCakes:", store.getState().cake.numOfCakes)
console.log("numofIceCreams:", store.getState().iceCream.numofIceCreams)

unsubscribe()
