import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ProductCartStore {
  products: CartProduct[]
  addProduct: (item: CartProduct) => void
  removeProduct: (item: CartProduct) => void
}

export const useProductCartStore = create<ProductCartStore>()(
  (set, get) => ({
    products: [],
    addProduct: (product: CartProduct) => set(state => ({
      products: [...state.products, product],
    })),
    removeProduct: (item: CartProduct) => set(state => ({
      products: state.products.filter(i => i.product.ID !== item.product.ID),
    })),
  }),
)