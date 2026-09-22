import { create } from "zustand";
import type { CartItem, Dessert } from "../types";

type CartState = {
    items: CartItem[],
    addItem: (dessert: Dessert) => void,
    incrementItem: (name: string) => void,
    decrementItem: (name: string) => void,
    removeItem: (name: string) => void,
    clearCart: () => void
}

export const useCartStore = create<CartState>((set)=>({
    items: [],
    addItem: (dessert) => set((state)=>({
        items: [...state.items, {...dessert, quantity: 1}]
    })),
    incrementItem: (name) => set((state)=>({
        items: state.items.map((item)=> item.name === name ? {...item, quantity: item.quantity + 1}:item)
    })),
    decrementItem: (name) => set((state)=>({
        items: state.items.map((item)=>item.name === name ? {...item, quantity: item.quantity - 1} : item)
    })),
    removeItem: (name) => set((state)=>({
        items: state.items.filter((item)=> item.name !== name)
    })),
    clearCart: () => set((state)=>({
        items: []
    })),
}))