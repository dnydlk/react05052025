import { recipes } from "../data"

export default function ExtractingAListItemComponent() {
  return (
    <div className="extracting-a-list-item-component">
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  )
}

function Recipe({
  id,
  name,
  ingredients,
}: {
  id: string
  name: string
  ingredients: string[]
}) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}
