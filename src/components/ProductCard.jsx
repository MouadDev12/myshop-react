import { motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import { useCart } from '../context/CartContext.jsx'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900 dark:text-gray-100">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-brand text-white hover:bg-brand-dark transition"
          >
            <FiPlus /> Add
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
