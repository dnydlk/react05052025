import { useEffect, useState } from "react"

const getSavedValue = (key: string, initialValue: any) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue !== null) return JSON.parse(savedValue)
  if (typeof initialValue === "function") return initialValue()
  return initialValue
}

export default function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
