import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import axios from "axios"

const initialState = {
  loading: false,
  users: [],
  error: "",
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST })
const fetchUsersSuccess = (users) => ({ type: FETCH_USERS_SUCCESS, payload: users })
const fetchUsersFailure = (error) => ({ type: FETCH_USERS_FAILURE, payload: error })

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true }
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: "" }
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, users: [], error: action.payload }
    default:
      return state
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((u) => u.id)
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(fetchUsers())
