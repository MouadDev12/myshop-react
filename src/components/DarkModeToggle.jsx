import { useTheme } from '../context/ThemeContext.jsx'
import { FiSun, FiMoon } from 'react-icons/fi'

function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      aria-label="Toggle dark mode"
      title={`Theme: ${theme}`}
    >
      {theme === 'dark' ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
    </button>
  )
}

export default DarkModeToggle