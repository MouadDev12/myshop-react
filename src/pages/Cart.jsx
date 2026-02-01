import { Link } from 'react-router-dom'
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi'
import { useCart } from '../context/CartContext.jsx'
import { motion } from 'framer-motion'

function Cart() {
    const { items, total, removeFromCart, decrement, addToCart } = useCart()

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl">🛒</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                    Looks like you haven't added anything to your cart yet.
                    Go ahead and explore our products.
                </p>
                <Link
                    to="/products"
                    className="px-8 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark transition font-medium"
                >
                    Start Shopping
                </Link>
            </div>
        )
    }

    return (
        <section className="space-y-8">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>

            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-8 space-y-4">
                    {items.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            className="flex gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl"
                        >
                            <div className="w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                                    </div>
                                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
                                        <button
                                            onClick={() => decrement(item.id)}
                                            className="p-1 rounded hover:bg-white dark:hover:bg-gray-700 shadow-sm transition"
                                            aria-label="Decrease quantity"
                                        >
                                            <FiMinus className="w-4 h-4" />
                                        </button>
                                        <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="p-1 rounded hover:bg-white dark:hover:bg-gray-700 shadow-sm transition"
                                            aria-label="Increase quantity"
                                        >
                                            <FiPlus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm font-medium transition"
                                    >
                                        <FiTrash2 /> Remove
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-4 mt-8 lg:mt-0">
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sticky top-24">
                        <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Tax (Estimated)</span>
                                <span>${(total * 0.1).toFixed(2)}</span>
                            </div>

                            <div className="border-t border-gray-200 dark:border-gray-800 pt-3 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${(total * 1.1).toFixed(2)}</span>
                            </div>
                        </div>

                        <Link to="/checkout" className="w-full flex items-center justify-center gap-2 bg-brand text-white py-3 rounded-lg hover:bg-brand-dark transition font-semibold">
                            Checkout <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
