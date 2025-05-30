import { useEffect, useState } from "react"

interface Recipe {
  id: string
  name: string
  tags: string[]
  ingredients: string[]
}

const sleep = async (millseconds: number) => {
  await new Promise((resolve) => setTimeout(resolve, millseconds))
}

export default function LiveLectureTueMay27() {
  const [id, setId] = useState(1)
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchRecipeById = async (id: number) => {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data = await res.json()
    setRecipe(data)
  }

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true)
      sleep(500)
      try {
        await fetchRecipeById(id)
      } catch (error) {
        console.log(error)
        setRecipe(null)
      } finally {
        setIsLoading(false)
      }
    }
    fetchRecipe()
  }, [id])

  if (isLoading) return <h4>Loading...</h4>
  if (!recipe) return <h4>No recipe found.</h4>

  return (
    <div className="live-lecture-tue-may-27">
      <h2>Live Lecture Thu May 27</h2>
      <h3>{recipe.name}</h3>
      {recipe.tags.map((tag) => {
        return (
          <span key={tag}>
            <b>{tag} </b>
          </span>
        )
      })}
      <ul>
        {recipe.ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient} </li>
        })}
      </ul>
      <br />
      <br />
      {/*//![FIXME] figure out this prev button from React Learn  */}
      <button
        disabled={id > 0 ? true : false}
        onClick={() => setId((prevId) => prevId - 1)}>
        Previous Recipe
      </button>
      <button onClick={() => setId((prevId) => prevId + 1)}>Next Recipe</button>
    </div>
  )
}
