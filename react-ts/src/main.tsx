import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

// createRoot(document.getElementById("root")!).render(
//   // <StrictMode>
//   // ! remove during development
//   // !    render's twice, no good during development
//   <App />
//   // </StrictMode>
// )

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(<App />)
} else throw new Error("Root element not found")
