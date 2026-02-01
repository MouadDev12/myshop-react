import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const login = async (email, password) => {
    // Demo: simplistic auth
    if (!email || !password || password.length < 4) {
      throw new Error('Invalid credentials')
    }
    setUser({ email })
    return { email }
  }

  const register = async (email, password) => {
    if (!email || !password || password.length < 4) {
      throw new Error('Invalid data')
    }
    // In a real app, call backend here.
    setUser({ email })
    return { email }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)