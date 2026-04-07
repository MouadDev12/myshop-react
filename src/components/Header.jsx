import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'
import DarkModeToggle from './DarkModeToggle.jsx'

function Header() {
  const [open, setOpen] = useState(false)
  const { items } = useCart()
  const { user, logout } = useAuth()

  const count = items.reduce((sum, i) => sum + i.quantity, 0)
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-brand font-semibold'
      : 'text-gray-800 dark:text-gray-100 hover:text-brand'

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50">
      <div className="container py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-brand dark:text-brand-dark">
          MyShop
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
            Cart
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
          <DarkModeToggle />

          <Link to="/cart" className="relative p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <FiShoppingCart className="text-xl" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand text-white text-xs rounded-full px-1.5">
                {count}
              </span>
            )}
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="flex items-center gap-2 px-3 py-1 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title={`Logged in as ${user.email}`}
            >
              <FiUser /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 px-3 py-1 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FiUser /> Login
            </Link>
          )}

          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="container py-2 flex flex-col gap-2">
            <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `${navLinkClass({ isActive })} py-2`}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)} className={({ isActive }) => `${navLinkClass({ isActive })} py-2`}>
              Products
            </NavLink>
            <NavLink to="/cart" onClick={() => setOpen(false)} className={({ isActive }) => `${navLinkClass({ isActive })} py-2`}>
              Cart
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
