// product slice first.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Obj { }

type product = {
  id: number | null,
  name: string | null,
  price: number | null,
  averageRating: number | null,
  variablePrice: number | null,
  dateLastUpdated: string | null,
  availableQuantity: number | null,
  reviews: Obj[] | null,
  orderItems: Obj[] | null,
};

interface ProductState {
  product: product;
}

/**
 *
 *
 *
 * nest product object in user state {
 *
 * }
 */

// 36->47 productSlice
const initialState: ProductState = {
  // 38 ->47 product object within userSlice
  product: {
    id: null,
    name: null,
    price: null,
    averageRating: null,
    variablePrice: null,
    dateLastUpdated: null,
    availableQuantity: null,
    reviews: null,
    orderItems: null,
  },
};

// name: 'product' is... state.product
// name: 'productSDFG' is... state.productSDFG

//
export const productSlice = createSlice({
  name: 'product',
  initialState,
  // actions mixed with reducers.
  reducers: {
    setProduct: (state, action: PayloadAction<product>) => {
      /** 
      Property 'product' does not exist on type 'WritableDraft<ProductState>' 

       */
      state.product = action.payload;
      // state = action.payload; // entire payload is product state
    },
  },
});

export const { setProduct } = productSlice.actions;

/** 
 * 
 * actions - function that holds a payload.. void function...payload is used to update state
 * reducers - actual thing that updates state. glorified switch stmnt
 * selectors - glorified state accessor .. like a key or index.. selector memoized things like the return value
 
*/

//https://javascript.plainenglish.io/styled-components-in-next-js-9a4e84278bdb
/**
 * Property 'product' does not exist on type '{ userReducer: ProductState; }'
 */
export const selectProduct = (state: RootState) => state;
//.product.user;

export default productSlice.reducer;
