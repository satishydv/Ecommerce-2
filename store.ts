import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface Store {
  // Cart state
  cart: Product[];
  addToCart: (product: Product) => void;
  addItem: (product: Product) => void; // Alias for addToCart
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Wishlist state (using the expected names from components)
  favoriteProduct: Product[];
  addToFavorite: (product: Product) => Promise<void>;
  removeFromFavorite: (productId: string) => void;
  resetFavorite: () => void;
  
  // Cart total
  getCartTotal: () => number;
  getCartCount: () => number;
  getItemCount: (productId: string) => number; // Get count of specific item
}

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      cart: [],
      favoriteProduct: [],
      
      addToCart: (product) => {
        set((state) => {
          const existingProduct = state.cart.find(item => item.id === product.id);
          if (existingProduct) {
            return {
              cart: state.cart.map(item =>
                item.id === product.id
                  ? { ...item, quantity: (item.quantity || 1) + 1 }
                  : item
              )
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }]
          };
        });
      },
      
      addItem: (product) => {
        // Alias for addToCart
        const state = get();
        state.addToCart(product);
      },
      
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter(item => item.id !== productId)
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cart: state.cart.map(item =>
            item.id === productId
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          )
        }));
      },
      
      clearCart: () => {
        set({ cart: [] });
      },
      
      addToFavorite: (product) => {
        return new Promise<void>((resolve) => {
          set((state) => {
            const existingProduct = state.favoriteProduct.find(item => item.id === product.id);
            if (existingProduct) {
              // Remove from favorites if already exists
              const newState = {
                favoriteProduct: state.favoriteProduct.filter(item => item.id !== product.id)
              };
              resolve();
              return newState;
            }
            // Add to favorites
            const newState = {
              favoriteProduct: [...state.favoriteProduct, product]
            };
            resolve();
            return newState;
          });
        });
      },
      
      removeFromFavorite: (productId) => {
        set((state) => ({
          favoriteProduct: state.favoriteProduct.filter(item => item.id !== productId)
        }));
      },
      
      resetFavorite: () => {
        set({ favoriteProduct: [] });
      },
      
      getCartTotal: () => {
        const state = get();
        return state.cart.reduce((total, item) => {
          return total + (item.price * (item.quantity || 1));
        }, 0);
      },
      
      getCartCount: () => {
        const state = get();
        return state.cart.reduce((count, item) => {
          return count + (item.quantity || 1);
        }, 0);
      },
      
      getItemCount: (productId: string) => {
        const state = get();
        const item = state.cart.find(item => item.id === productId);
        return item ? (item.quantity || 1) : 0;
      },
    }),
    {
      name: 'shopzone-store',
      partialize: (state) => ({
        cart: state.cart,
        favoriteProduct: state.favoriteProduct,
      }),
    }
  )
);

export default useStore; 