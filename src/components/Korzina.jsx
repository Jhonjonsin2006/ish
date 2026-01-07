import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Korzina = () => {
  const { cart, increase, decrease, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto px-5 pt-24">
      <h1 className="text-2xl font-bold mb-6">Savat</h1>

      {cart.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white shadow rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p>{item.basePrice}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrease(item.id)}
                  className="px-3 py-1 bg-orange-500 text-white rounded"
                >
                  −
                </button>

                <span className="font-bold">{item.quantity}</span>

                <button
                  onClick={() => increase(item.id)}
                  className="px-3 py-1 bg-orange-500 text-white rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded ml-4"
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Korzina;
