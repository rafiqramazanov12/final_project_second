import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const writeBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
  cards: getBasketFromStorage(),
  drawer: false,
  totalPrice: 0
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.cards.find(item => item.id === action.payload.id);
      if (!findProduct) {
        state.cards.push({
          ...action.payload,
          price: Number(action.payload.price),
          quantity: 1
        });
        writeBasketToStorage(state.cards);
      }
    },

    removeFromBasket: (state, action) => {
      state.cards = state.cards.filter(item => item.id !== action.payload);
      writeBasketToStorage(state.cards);
    },

    calculateBasket: (state) => {
      state.totalPrice = state.cards.reduce((total, item) => {
        const itemPrice = Number(item.price);
        const quantity = Number(item.quantity) || 1;
        return total + (itemPrice * quantity);
      }, 0);
    },

    setDrawer: (state) => {
      state.drawer = !state.drawer;
    }
  }
});

export const {
  addToBasket,
  removeFromBasket,
  calculateBasket,
  setDrawer
} = basketSlice.actions;

export default basketSlice.reducer;
