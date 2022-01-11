// order slice first.
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Obj {}

type order = {
  id: number | null;
  quantity: number | null;
  frozenPrice: number | null;
  frozenGrandTotalCost: number | null;
  orderId: number | null;
  productId: number | null;
  products: Obj[] | null; // <-- not a reverse reln, just a reln
  orders: Obj[] | null; // <-- not a reverse reln, just a reln
};

interface OrderState {
  order: order;
}

/**
 *
 *
 *
 * nest order object in order state {
 *
 * }
 */

// 36->47 orderSlice
const initialState: OrderState = {
  // 38 ->47 order object within orderSlice
  order: {
    id: null,
    quantity: null,
    frozenPrice: null,
    frozenGrandTotalCost: null, // <--- Q: How do we not bake this in? in the redux way
    orderId: null,
    productId: null,
    products: null, // <-- not a reverse reln, just a reln
    orders: null, // <-- not a reverse reln, just a reln
  },
};

// name: 'order' is... state.order
// name: 'orderSDFG' is... state.orderSDFG

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  // actions mixed with reducers.
  reducers: {
    setOrder: (state, action: PayloadAction<order>) => {
      /** 
      Property 'order' does not exist on type 'WritableDraft<OrderState>' 

       */
      state.order = action.payload;
      // state = action.payload; // entire payload is order state
    },
  },
});

export const { setOrder } = orderSlice.actions;

/** 
 * 
 * actions - function that holds a payload.. void function...payload is used to update state
 * reducers - actual thing that updates state. glorified switch stmnt
 * selectors - glorified state accessor .. like a key or index.. selector memoized things like the return value
 
*/

//https://javascript.plainenglish.io/styled-components-in-next-js-9a4e84278bdb
/**
 * Property 'order' does not exist on type '{ orderReducer: OrderState; }'
 */
export const selectOrder = (state: RootState) => state;
//.order.order;

export default orderSlice.reducer;
