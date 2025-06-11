import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink to="/" exact activeClassName="active">
          All
        </NavLink>
      </li>
      <li>
        <NavLink to="/completed" activeClassName="active">
          Completed
        </NavLink>
      </li>
    </ul>
  )
}
