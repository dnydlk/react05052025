import { useEffect, useState } from "react"

const API = "https://dummyjson.com/posts"
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const fetchDataFromUrl = async (url: string) => {
  await sleep(400)
  const fetchedData = await fetch(url)
  const data = await fetchedData.json()
  return data.posts
}
const getTagsFromPosts = (posts: PostItemType[]) => {
  const tagsArr: string[] = ["all"]
  posts.forEach((p) => p.tags.forEach((tag) => tagsArr.push(tag)))
  return Array.from(new Set(tagsArr.sort()))
}

type PostItemType = {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: { likes: number; dislikes: number }
  views: number
  userId: number
}

export default function LiveLectureMonJune01() {
  const [isLoading, setIsLoading] = useState(false)
  const [hasPosts, setHasPosts] = useState(false)
  const [originalPosts, setOriginalPosts] = useState<[] | PostItemType[]>([])
  const [filteredPosts, setFilteredPosts] = useState<[] | PostItemType[]>([])
  const [searchBoxInput, setSearchBoxInput] = useState("")
  const [selectedTag, setSelectedTag] = useState("all")
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setIsLoading(true)
        const fetchedPosts = await fetchDataFromUrl(API)
        setOriginalPosts(fetchedPosts)
        setFilteredPosts(fetchedPosts)
        setTags(getTagsFromPosts(fetchedPosts))
        setHasPosts(true)
      } catch (error) {
        console.error("Failed to fetch from API", error)
        setHasPosts(false)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAllPosts()
  }, [])

  const handleSearchInputChange = (value: string) => setSearchBoxInput(value)
  const handleSelectChange = (value: string) => setSelectedTag(value)

  const filterAndSetPosts = () => {
    const keyword = searchBoxInput.trim().toLowerCase()
    let filtered = filteredPosts

    if (selectedTag !== "all") {
      filtered = filtered.filter(({ tags }) => tags.includes(selectedTag))
    }
    if (keyword.length > 0) {
      filtered = filtered.filter(({ title }) => title.toLowerCase().includes(keyword))
    }
    setOriginalPosts(filtered)
  }

  useEffect(() => filterAndSetPosts(), [searchBoxInput, selectedTag])

  const postContent = originalPosts.map(
    ({ id, title, body, tags, reactions: { likes, dislikes }, userId, views }) => {
      return (
        <div key={id}>
          <hr />
          <h2>{title}</h2>
          <h4>[{tags.join("] [")}]</h4>
          <p>
            <b>User ID: {userId}</b>
          </p>
          <p>{body}</p>
          <div className="myFlexBox">
            <span>👍🏻: {likes}</span>
            <span> 👎🏻: {dislikes}</span>
            <p style={{ display: "inline-block", marginLeft: "auto" }}>
              <b>{views} Views</b>
            </p>
          </div>
        </div>
      )
    }
  )

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && !hasPosts && <h3>Failed to fetch from {API}</h3>}
      {!isLoading && hasPosts && (
        <>
          <input
            value={searchBoxInput}
            onChange={(e) => handleSearchInputChange(e.target.value)}
            placeholder="Search posts by title..."
          />
          <br />
          <span>Filter by Tag: </span>
          <select
            name="tags"
            id="tags"
            value={selectedTag}
            onChange={(e) => handleSelectChange(e.target.value)}>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </select>
          <p>{originalPosts.length} posts found</p>
          {postContent}
        </>
      )}
    </div>
  )
}
