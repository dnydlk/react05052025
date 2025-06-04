import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useThemeContext must be used within ThemeProvider")
  return context
}

export function ThemeProvider({ children }: { children: React.ReactElement }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme")
    return (saved as Theme) || "light"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
