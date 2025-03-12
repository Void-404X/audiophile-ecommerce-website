import { create } from "zustand";

interface CartItem {
  cartId: string;
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "cartId">, quantity: number) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item, quantity) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id && cartItem.name === item.name
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.cartId === existingItem.cartId
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          { ...item, quantity, cartId: `${item.id}-${Date.now()}` },
        ],
      };
    });
  },

  removeFromCart: (cartId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.cartId !== cartId),
    }));
  },

  updateQuantity: (cartId, quantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.cartId === cartId ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    }));
  },

  clearCart: () => set({ cart: [] }),

  totalPrice: () =>
    get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));
