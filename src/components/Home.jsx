import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? products
      : products.filter(p => p.category === category);

  return (
    <>
      <FilterBar setCategory={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
