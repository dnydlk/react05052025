import { BUY_HOTDOG } from "./hotdogTypes"

export const buyHotdog = (num = 1) => {
  return {
    type: BUY_HOTDOG,
    payload: num,
  }
}
