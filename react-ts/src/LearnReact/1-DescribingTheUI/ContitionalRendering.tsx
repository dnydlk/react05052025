function ItemTernary({ item, isPacked }: { item: string; isPacked: boolean }) {
  return <li className="item">{isPacked ? <del>{item + "✅"}</del> : item}</li>
}
function ItemAND({ item, isPacked }: { item: string; isPacked: boolean }) {
  return (
    <li className="item">
      {item} {isPacked && "✅"}
    </li>
  )
}

function ItemVariable({ item, isPacked }: { item: string; isPacked: boolean }) {
  let myItem: string | React.ReactElement = item
  if (isPacked) myItem = <del>{myItem + " ✅"}</del>
  return <li className="item">{myItem}</li>
}

export default function ContitionalRendering() {
  return (
    <section>
      <h1 style={{ fontStyle: "italic" }}>Dani's Packing List</h1>
      <ul>
        <ItemTernary item="Laptop" isPacked={true} />
        <ItemTernary item="iPhone" isPacked={false} />
        <ItemAND item="Charger" isPacked={true} />
        <ItemVariable item="Switch" isPacked={true} />
      </ul>
    </section>
  )
}
