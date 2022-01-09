// orderItem slice first.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Obj { }

type orderItem = {
  id: number | null,
  quantity: number | 0,
  frozenPrice: number | null,
  frozenGrandTotalCost: number | null,
  orderId: number | null,
  productId: number | null,
  products: Obj[] | null,
};

interface OrderItemState {
  orderItem: orderItem;
}

/**
 *
 *
 *
 * nest orderItem object in user state {
 *
 * }
 */

// 36->47 orderItemSlice
const initialState: OrderItemState = {
  // 38 ->47 orderItem object within userSlice
  orderItem: {
    id: null,
    quantity: 0,
    frozenPrice: null,
    frozenGrandTotalCost: null,
    orderId: null,
    productId: null,
    products: null,
  },
};

// name: 'orderItem' is... state.user
// name: 'orderItemSDFG' is... state.userSDFG

//
export const orderItemSlice = createSlice({
  name: 'orderItem',
  initialState,
  // actions mixed with reducers.
  reducers: {
    setOrderItem: (state, action: PayloadAction<orderItem>) => {
      /** 
      Property 'orderItem' does not exist on type 'WritableDraft<OrderItemState>' 

       */
      state.orderItem = action.payload;
      // state = action.payload; // entire payload is orderItem state
    },
  },
});

export const { setOrderItem } = orderItemSlice.actions;

/** 
 * 
 * actions - function that holds a payload.. void function...payload is used to update state
 * reducers - actual thing that updates state. glorified switch stmnt
 * selectors - glorified state accessor .. like a key or index.. selector memoized things like the return value
 
*/

//https://javascript.plainenglish.io/styled-components-in-next-js-9a4e84278bdb
/**
 * Property 'orderItem' does not exist on type '{ userReducer: OrderItemState; }'
 */
export const selectOrderItem = (state: RootState) => state;
//.orderItem.user;

export default orderItemSlice.reducer;

