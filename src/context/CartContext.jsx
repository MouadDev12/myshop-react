import { createContext, useContext, useReducer, useMemo } from 'react'

const CartContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.item.id)
      let items
      if (existing) {
        items = state.items.map(i =>
          i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      } else {
        items = [...state.items, { ...action.item, quantity: 1 }]
      }
      const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
      return { items, total }
    }
    case 'REMOVE': {
      const items = state.items.filter(i => i.id !== action.id)
      const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
      return { items, total }
    }
    case 'DECREMENT': {
      const items = state.items
        .map(i => (i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter(i => i.quantity > 0)
      const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
      return { items, total }
    }
    case 'CLEAR':
      return { items: [], total: 0 }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [], total: 0 })

  const value = useMemo(() => ({
    items: state.items,
    total: state.total,
    addToCart: item => dispatch({ type: 'ADD', item }),
    removeFromCart: id => dispatch({ type: 'REMOVE', id }),
    decrement: id => dispatch({ type: 'DECREMENT', id }),
    clearCart: () => dispatch({ type: 'CLEAR' }),
  }), [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)