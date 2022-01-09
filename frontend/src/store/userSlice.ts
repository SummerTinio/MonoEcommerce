// user slice first.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Obj { }

type user = {
  id: number | null;
  name: string | null;
  email: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  posts: Obj[] | null;
  orders: Obj[] | null;
  reviews: Obj[] | null;
};

interface UserState {
  user: user;
}

/**
 *
 *
 *
 * nest user object in user state {
 *
 * }
 */

// 36->47 userSlice
const initialState: UserState = {
  // 38 ->47 user object within userSlice
  user: {
    id: 12,
    name: 'gdfdf',
    email: 'asdad',
    createdAt: 'sdfds',
    updatedAt: 'sdfs',
    posts: [{}, {}],
    orders: [{}, {}, {}],
    reviews: [{}],
  },
};

// name: 'user' is... state.user
// name: 'userSDFG' is... state.userSDFG

//
export const userSlice = createSlice({
  name: 'user',
  initialState,
  // actions mixed with reducers.
  reducers: {
    setUser: (state, action: PayloadAction<user>) => {
      /** 
      Property 'user' does not exist on type 'WritableDraft<UserState>' 

       */
      state.user = action.payload;
      // state = action.payload; // entire payload is user state
    },
  },
});

export const { setUser } = userSlice.actions;

/** 
 * 
 * actions - function that holds a payload.. void function...payload is used to update state
 * reducers - actual thing that updates state. glorified switch stmnt
 * selectors - glorified state accessor .. like a key or index.. selector memoized things like the return value
 
*/

//https://javascript.plainenglish.io/styled-components-in-next-js-9a4e84278bdb
/**
 * Property 'user' does not exist on type '{ userReducer: UserState; }'
 */
export const selectUser = (state: RootState) => state;
//.user.user;

export default userSlice.reducer;
