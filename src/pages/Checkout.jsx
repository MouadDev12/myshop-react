import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi'

function Checkout() {
    const { items, total, clearCart } = useCart()
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate API call
        setTimeout(() => {
            setSuccess(true)
            clearCart()
        }, 1500)
    }

    if (items.length === 0 && !success) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Cart is empty</h2>
                <button
                    onClick={() => navigate('/products')}
                    className="text-brand hover:underline"
                >
                    Return to shop
                </button>
            </div>
        )
    }

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                    <FiCheckCircle className="text-4xl text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Order Successful!</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                    Thank you for your purchase. We've sent a confirmation email to your inbox.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="px-8 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark transition font-medium"
                >
                    Back to Home
                </button>
            </div>
        )
    }

    return (
        <section>
            <button
                onClick={() => navigate('/cart')}
                className="flex items-center gap-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-6 transition"
            >
                <FiArrowLeft /> Back to Cart
            </button>

            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-8">
                    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
                        {/* Contact Info */}
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none transition"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">First Name</label>
                                    <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Last Name</label>
                                    <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none transition" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium mb-1">Address</label>
                                    <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">City</label>
                                    <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Postal Code</label>
                                    <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-brand outline-none transition" />
                                </div>
                            </div>
                        </div>

                        {/* Payment (Mock) */}
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                            <div className="p-4 border border-brand/20 bg-brand/5 rounded-lg mb-4">
                                <p className="text-sm text-brand-dark font-medium">✨ Demo Mode: No payment required.</p>
                            </div>
                            <div className="space-y-4 opacity-50 pointer-events-none">
                                <input type="text" placeholder="Card number" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="MM / YY" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700" />
                                    <input type="text" placeholder="CVC" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Order Summary Sidebar */}
                <div className="lg:col-span-4 mt-8 lg:mt-0">
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sticky top-24">
                        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                        <div className="space-y-2 mb-6 max-h-64 overflow-auto scrollbar-thin">
                            {items.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="truncate pr-4">{item.quantity}x {item.name}</span>
                                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-800 pt-3 space-y-2 mb-6">
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2">
                                <span>Total</span>
                                <span>${(total * 1.1).toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            form="checkout-form"
                            type="submit"
                            className="w-full bg-brand text-white py-3 rounded-lg hover:bg-brand-dark transition font-semibold"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
