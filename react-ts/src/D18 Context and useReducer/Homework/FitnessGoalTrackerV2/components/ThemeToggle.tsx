import { useThemeContext } from "../context/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()

  return <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
}
