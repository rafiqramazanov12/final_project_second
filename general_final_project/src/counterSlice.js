import { createSlice } from '@reduxjs/toolkit';
import arrivalsFirstImg from '../src/assets/images/arrivals_first_img.png';
import arrivalSecondImg from '../src/assets/images/arrivals_second_img.png';
import arrivalsThirdImg from '../src/assets/images/arrivals_third_img.png';
import mainFourthImg from '../src/assets/images/arrivals_fourth_img.png';
import mainFifthImg from '../src/assets/images/arrivals_fifth_img.png';
import mainSixthImg from '../src/assets/images/arrivals_sixth_img.png';
import mainSeventhImg from '../src/assets/images/arrivals_seventh_img.png';
import mainEighthImg from '../src/assets/images/arrivals_eighth_img.png';

const initialState = {
  products: [
    {
      id: 1,
      img: arrivalsFirstImg,
      name: 'T-SHIRT WITH TAPE DETAILS',
      ratingStars: '⭐️⭐️⭐️⭐️⯨',
      rating: '4.5/5',
      price: '$120',
    },
    {
      id: 2,
      img: arrivalSecondImg,
      name: 'SKINNY FIT JEANS',
      ratingStars: '⭐️⭐️⭐️⭐️⯨',
      rating: '3.5/5',
      price: '$240',
    },
    {
      id: 3,
      img: arrivalsThirdImg,
      name: 'CHECKERED SHIRT',
      ratingStars: '⭐️⭐️⭐️⭐️⯨',
      rating: '4.5/5',
      price: '$180',
    },
    {
      id: 4,
      img: mainFourthImg,
      name: 'CHECKERED SHIRT',
      ratingStars: '⭐️⭐️⭐️⭐️⯨',
      rating: '4.5/5',
      price: '$130',
    },
    {
      id: 5,
      img: mainSeventhImg,
      name: 'ANOTHER PRODUCT',
      ratingStars: '⭐️⭐️⭐️⭐️⭐️',
      rating: '5/5',
      price: '$200',
    },
    {
      id: 6,
      img: mainEighthImg,
      name: 'YET ANOTHER PRODUCT',
      ratingStars: '⭐️⭐️⭐️⭐️⯨',
      rating: '4/5',
      price: '$150',
    },
    {
      id: 7,
      img: mainFifthImg,
      name: 'Gradient Graphic T-shirt',
      ratingStars: '⭐️⭐️⭐️⭐️⯨',
      rating: '3.5/5',
      price: '$145',
    },
    {
      id: 8,
      img: mainSixthImg,
      name: 'Polo with Tipping Details',
      ratingStars: '⭐️⭐️⭐️⭐️⯨',
      rating: '4/5',
      price: '$180',
    },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // Yeni məhsul əlavə etmək
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      // ID-yə görə məhsulu silmək
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
