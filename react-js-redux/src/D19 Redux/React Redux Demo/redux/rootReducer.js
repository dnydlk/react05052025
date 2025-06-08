// Combine all reducers and export the rootReducer
import { combineReducers } from "redux"
import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
import hotdogReducer from "./hotdog/hotdogReducer"

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  hotdog: hotdogReducer,
})

export default rootReducer
