import { connect } from "react-redux"
import { fetchUsers } from "../redux/actions"
import { useEffect } from "react"

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])

  return userData.isLoading ? (
    <div>
      <h2>Loading</h2>
    </div>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((u) => {
            return <p key={u.id}>{u.name}</p>
          })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
