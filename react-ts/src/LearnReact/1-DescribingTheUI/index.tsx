import Challenge from "./Challenge"
import ContitionalRendering from "./ContitionalRendering"
import Gallery from "./Gallery"
import NestingJSX from "./NestingJSX"
import RenderingList from "./RenderingList"
import TodoList from "./TodoList"

export default function DescribingTheUI() {
  return (
    <div className="describing-the-ui">
      <h2>Describing The UI</h2>
      <a href="https://react.dev/learn/describing-the-ui">Describing the UI</a>
      <Gallery />
      <hr className="hr2" />
      <TodoList />
      <hr className="hr2" />
      <NestingJSX />
      <hr className="hr2" />
      <Challenge />
      <hr className="hr2" />
      <ContitionalRendering />
      <hr className="hr2" />
      <RenderingList />
    </div>
  )
}
