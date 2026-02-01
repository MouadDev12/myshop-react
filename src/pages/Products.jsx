import { useMemo, useState } from "react";
import { products, categories } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";

function Products() {
  const [selected, setSelected] = useState("all");

  const filtered = useMemo(() => {
    return selected === "all"
      ? products
      : products.filter((p) => p.category === selected);
  }, [selected]);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-center mb-8">
        <CategoryFilter
          categories={categories}
          selected={selected}
          onChange={setSelected}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
