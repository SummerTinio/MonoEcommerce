// productList slice first.
import { useAppSelector, useAppDispatch } from '../hooks';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ICommerceJSProductPayload {
  id: string | null;
  created: string | null;
  updated: string | null;
  active: boolean | null;
  permalink: null | string;
  name: string | null;
  description: string | null;
  price: {
    raw: number | null;
    formatted: number | null;
    formatted_with_symbol: string | null;
    formatted_with_code: string | null;
  };
}

interface ProductState {
  productList: ICommerceJSProductPayload | null;
}

/**
 *
 *
 *
 * nest productList object in user state {
 *
 * }
 */

// 36->47 productListSlice
const initialState: ProductState = {
  // 38 ->47 productList object within userSlice
  productList: null,
};

// name: 'productList' is... state.productList
// name: 'productListSDFG' is... state.productListSDFG

//
export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  // actions mixed with reducers.
  reducers: {
    setProductList: (
      state,
      action: PayloadAction<ICommerceJSProductPayload>,
    ) => {
      /** 
      Property 'productList' does not exist on type 'WritableDraft<ProductState>' 

       */
      state.productList = action.payload;
      // state = action.payload; // entire payload is productList state
    },
  },
});

export const { setProductList } = productListSlice.actions;

/** 
 * 
 * actions - function that holds a payload.. void function...payload is used to update state
 * reducers - actual thing that updates state. glorified switch stmnt
 * selectors - glorified state accessor .. like a key or index.. selector memoized things like the return value
 
*/

//https://javascript.plainenglish.io/styled-components-in-next-js-9a4e84278bdb
/**
 * Property 'productList' does not exist on type '{ userReducer: ProductState; }'
 */
export const selectProduct = (state: RootState) => state;
//.productList.user;

export default productListSlice.reducer;
