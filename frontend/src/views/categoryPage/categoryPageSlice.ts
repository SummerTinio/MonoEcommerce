// product slice first.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface ICommerceJSProductPayload {
  id: string | null,
  created: string | null,
  updated: string | null,
  active: boolean | null,
  permalink: null | string,
  name: string | null,
  description: string | null,
  price: {
    raw: number | null,
    formatted: number | null,
    formatted_with_symbol: string | null,
    formatted_with_code: string | null,
  };
}

interface ProductState {
  product: ICommerceJSProductPayload | null;
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
  product: null,
};

// name: 'product' is... state.user
// name: 'productSDFG' is... state.userSDFG

//
export const productSlice = createSlice({
  name: 'product',
  initialState,
  // actions mixed with reducers.
  reducers: {
    setProduct: (state, action: PayloadAction<ICommerceJSProductPayload>) => {
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
