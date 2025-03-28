import { create } from "zustand";

interface Product {
  id: number
  name: string;
  image: string;
  tag?: string;
  description: string;
  price: number;
  type: string;
  images?: string[];
  features1: string;
  features2: string;
  inTheBox?: { item: string; quantity: number }[];
  inBasket?: null
}


interface StoreState {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

export default useStore;
