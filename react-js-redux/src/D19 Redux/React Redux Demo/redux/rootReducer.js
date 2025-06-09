// Combine all reducers and export the rootReducer
import { combineReducers } from "redux"
import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
import hotdogReducer from "./hotdog/hotdogReducer"
import userReducer from "./user/userReducer"

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  hotdog: hotdogReducer,
  user: userReducer,
})

export default rootReducer
