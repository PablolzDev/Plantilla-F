// store.ts
import { configureStore } from '@reduxjs/toolkit';
// Importa el reducer del carrito de compras (aún no definido)
import cartReducer from './features/cartSlice'; // Asegúrate de que el path sea correcto

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Añade el reducer del carrito al objeto reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;