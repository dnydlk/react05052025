import { connect } from "react-redux"
import { buyCake, buyIceCream } from "../redux/actions"

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

// OwnProps: the component's own props
const mapStateToProps = (state, ownProps) => {
  const ItemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
  return {
    item: ItemState,
  }
}

const mapDispatchToPops = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
  return {
    buyItem: dispatchFunction,
  }
}

export default connect(mapStateToProps, mapDispatchToPops)(ItemContainer)
