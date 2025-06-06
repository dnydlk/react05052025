// Redux Implementation2 Example in plain JavaScript
// With 2 shoppkers(reducers), one for cakes and one for ice-creams

const redux = require("redux")
const createStore = redux.createStore
const combineReducers = redux.combineReducers // Import combineReducers to handle multiple reducers

const BUY_CAKE = "BUY_CAKE"
const BUY_ICE_CREAM = "BUY_ICE_CREAM" // Added ice-cream action type

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  }
}

function buyIceCream() {
  // Added ice-cream action creator
  return {
    type: BUY_ICE_CREAM,
    info: "Second redux action",
  }
}

// old initialState
// const initialState = {
//   numOfCakes: 10,
//   numofIceCreams: 20, // Added ice-cream state
// }

// Split the initial state into two parts for clarity
const InitialCakeState = {
  numOfCakes: 10,
}
const InitialIceCreamState = {
  numofIceCreams: 20,
}

// Old reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       }

//     // Added case for ice-cream action
//     case BUY_ICE_CREAM:
//       return {
//         ...state,
//         numofIceCreams: state.numofIceCreams - 1,
//       }

//     default:
//       return state
//   }
// }

// Split the reducer into two parts for clarity
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

// ⚠️ Issue: createStore can only accept one reducer function
// ❌ const store = createStore(reducer)
// ✅ Solution: Use combineReducers to combine multiple reducers,
// 👆🏻see line 6
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

// Create the store with the combined reducer
const store = createStore(rootReducer)

console.log("Initial State", store.getState())

const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyIceCream())

// Accessing numOfCakes from the cake reducer
console.log("numOfCakes:", store.getState().cake.numOfCakes)
// Accessing numofIceCreams from the iceCream reducer
console.log("numofIceCreams:", store.getState().iceCream.numofIceCreams)

unsubscribe()
