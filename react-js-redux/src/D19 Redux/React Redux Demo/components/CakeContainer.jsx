import { connect } from "react-redux"
import { buyCake } from "../redux/actions"

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}

//* Define this function when you want to access the state from the Redux store
// #1 the state from the Redux store is mapped to props
// so apart from whatever props the component is receiving,
// it will also receive the numOfCakes prop from the Redux store
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  }
}

//* Define this function when you want to access the action creators
// #2 the dispatch of an action creator to a prop in the component
// so the component will receive another additional prop called buyCake
// which is a function that dispatches the buyCake action
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}

// #3 connect the component to the Redux store
// the connect function connects the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
