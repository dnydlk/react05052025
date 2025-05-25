import { poem } from "../data"
import { Fragment } from "react/jsx-runtime"

export default function ListWithASeparator() {
  return (
    <div className="list-with-a-separator">
      <article>
        {poem.lines.map((l, i) => (
          <Fragment key={i}>
            {i > 0 && <hr />}
            <p>{l}</p>
          </Fragment>
        ))}
      </article>
    </div>
  )
}
