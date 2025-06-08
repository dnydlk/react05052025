import CakeContainer from "./components/CakeContainer"
import { Provider } from "react-redux"
import store from "./redux/store"
import HooksCakeContainer from "./components/HooksCakeContainer"
import IceCreamContainer from "./components/iceCreamContainer"
import HotdogContainer from "./components/hotdogContainer"
import NewCakeContainer from "./components/NewCakeContainer"
import ItemContainer from "./components/ItemContainer"

export default function App() {
  return (
    <div className="react-redux-demo">
      <h2>React Redux Demo</h2>
      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HotdogContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </Provider>
    </div>
  )
}
