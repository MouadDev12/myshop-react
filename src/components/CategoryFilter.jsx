function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-2">
      <button
        onClick={() => onChange('all')}
        className={`px-4 py-2 rounded border transition ${selected === 'all'
          ? 'bg-brand text-white border-brand'
          : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
          }`}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded border transition ${selected === cat
            ? 'bg-brand text-white border-brand'
            : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter