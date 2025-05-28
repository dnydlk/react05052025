import { useState } from "react"

export default function Challenge1And2() {
  return (
    <div className="d12-challenge1-2">
      <h3>Challenge 1 & 2: Update an item in the shopping cart</h3>
      <ShoppingCart />
    </div>
  )
}

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
]

function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  function handleIncreaseClick(productId: number) {
    const nextProducts = products.map((p) => {
      if (p.id === productId) return { ...p, count: p.count + 1 }
      else return p
    })
    setProducts(nextProducts)
  }

  function handleDecreaseClick(productId: number) {
    let nextProducts = products.map((p) => {
      if (p.id === productId) return { ...p, count: p.count - 1 }
      else return p
    })
    nextProducts = nextProducts.filter((p) => p.count > 0)
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button onClick={() => handleIncreaseClick(product.id)}>+</button>
          <button onClick={() => handleDecreaseClick(product.id)}>-</button>
        </li>
      ))}
    </ul>
  )
}
