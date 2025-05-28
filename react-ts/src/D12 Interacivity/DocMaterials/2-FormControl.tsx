// import "./2-FormControl.css"

import React, { useState } from "react"

export default function FormControl() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("mario")
  const [content, setContent] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContent([title, body, author])
  }

  return (
    <div className="form-control">
      <h3>Form Control</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />

        <label>Blog body:</label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <br />
        <br />

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <br />
        <br />

        <button>Add Blog</button>

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        <p>{content.join(" ")}</p>
      </form>
    </div>
  )
}
