import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl bg-gradient-to-r from-brand to-brand-dark text-white p-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Bienvenue dans MyShop</h1>
        <p className="mt-2 text-white/90">
          Icônes, animations, transitions, dark mode, et plus encore.
        </p>
        <Link
          to="/products"
          className="inline-block mt-4 px-5 py-2 rounded bg-white text-brand hover:bg-white/90 transition"
        >
          Découvrir les produits
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/cart" className="block rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition bg-white dark:bg-gray-900">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Panier avec useContext</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Gérez votre panier facilement et rapidement.
          </p>
        </Link>
        <Link to="/products" className="block rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition bg-white dark:bg-gray-900">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Filtres par catégorie</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Trouvez ce que vous cherchez en un clic.
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Home
