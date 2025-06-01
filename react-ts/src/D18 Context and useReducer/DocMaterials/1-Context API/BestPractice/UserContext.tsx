import { createContext, useState } from "react"

type UserContextType = {}

export const UserContext = createContext<UserContextType | null>(null)

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  const login = () => {
    fetch("/login").then((res) => {
      setIsAuth(true)
      setUserInfo(res.user)
    })
  }

  const logout = () => {
    fetch("/logout").then((res) => {
      setIsAuth(false)
      setUserInfo(null)
    })
  }

  const value = {
    userInfo,
    setUserInfo,
    isAuth,
    setIsAuth,
    login,
    logout,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default { UserContext, UserContextProvider }
