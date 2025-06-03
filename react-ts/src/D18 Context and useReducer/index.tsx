import DocMaterials from "./DocMaterials"

export default function D18() {
  const components = [DocMaterials]
  return (
    <div className="day18-context-and-use-reducer">
      <h1>D18 Context & useReducer</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
