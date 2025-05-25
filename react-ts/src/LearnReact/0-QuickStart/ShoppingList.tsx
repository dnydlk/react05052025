const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
]

export default function ShoppingList() {
  const listItems = products.map(({ title, id, isFruit }) => (
    <li key={id} style={{ color: isFruit ? "magenta" : "darkgreen", textAlign: "left" }}>
      {title}
    </li>
  ))
  return (
    <div className="myFlexBox">
      <ul>{listItems}</ul>
    </div>
  )
}
