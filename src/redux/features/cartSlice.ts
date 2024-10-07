// cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Lista de items en el carrito
  totalAmount: 0, // Monto total del carrito
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Aquí puedes definir las acciones más tarde
  },
});

export const { } = cartSlice.actions; // Exporta las acciones (aún no definidas)

export default cartSlice.reducer; // Exporta el reducer