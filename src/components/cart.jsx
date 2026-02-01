import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-xl font-bold mb-4">🛒 Panier</h2>

      {cart.length === 0 && <p>Panier vide</p>}

      {cart.map(item => (
        <div key={item.id}
          className="flex justify-between bg-white dark:bg-gray-700 p-3 mb-2 rounded">
          <span>{item.name}</span>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500">
            Supprimer
          </button>
        </div>
      ))}

      <h3 className="mt-4 font-semibold">Total : {total} DH</h3>
    </div>
  );
}
