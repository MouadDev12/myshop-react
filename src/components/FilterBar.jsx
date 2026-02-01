export default function FilterBar({ setCategory }) {
  const cats = ["All", "Homme", "Femme", "Unisexe"];

  return (
    <div className="flex gap-3 p-4 justify-center">
      {cats.map(c => (
        <button
          key={c}
          onClick={() => setCategory(c)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
          {c}
        </button>
      ))}
    </div>
  );
}
