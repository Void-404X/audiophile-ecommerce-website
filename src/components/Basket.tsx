import React, { useState } from "react";
import { useCartStore } from "../store/basket_store";

const Basket: React.FC = () => {
  const { cart, updateQuantity, clearCart, totalPrice, removeFromCart } =
    useCartStore();
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">CART ({cart.length})</h2>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-gray-500 text-sm underline mb-4"
          >
            Remove all
          </button>
        )}

        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded"
              />
              <div className="flex-1 ml-4">
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <button
                  className="px-2 text-gray-600"
                  onClick={() =>
                    item.quantity === 1
                      ? removeFromCart(item.cartId)
                      : updateQuantity(item.cartId, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  className="px-2 text-gray-600"
                  onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-bold text-lg mt-6">
          <span>TOTAL</span>
          <span>${totalPrice()}</span>
        </div>

        {cart.length > 0 && (
          <button
            onClick={handleCheckout}
            className="bg-[#D87D4A] text-white w-full py-3 mt-6 rounded hover:bg-[#b56236]"
          >
            CHECKOUT
          </button>
        )}
      </div>


      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h3 className="text-xl font-bold mb-4">Спасибо за покупку!</h3>
            <p className="text-gray-600 mb-4">Ваш заказ успешно оформлен.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#D87D4A] text-white px-4 py-2 rounded hover:bg-[#b56236]"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
