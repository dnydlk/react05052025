import { BUY_HOTDOG } from "./hotdogTypes"

const initialState = {
  numOfHotdog: 30,
}

const hotdogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_HOTDOG:
      return {
        ...state,
        numOfHotdog: state.numOfHotdog - action.payload,
      }

    default:
      return state
  }
}

export default hotdogReducer
