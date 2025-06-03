import DocMaterials from "./DocMaterials"

export default function D16() {
  const components = [DocMaterials]
  return (
    <div className="day16-patterns">
      <h1>D16 Patterns</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
