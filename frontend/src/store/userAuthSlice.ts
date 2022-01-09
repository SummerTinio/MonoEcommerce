// userAuth slice first.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Obj { }

type userAuth = {
  id: number | null,
  email: string | null,
  usernameAuthCopy: string | null,
  username: Obj[] | null,
  userId: number | null,
};

interface UserAuthState {
  userAuth: userAuth;
}

/**
 *
 *
 *
 * nest userAuth object in user state {
 *
 * }
 */

// 36->47 userAuthSlice
const initialState: UserAuthState = {
  // 38 ->47 userAuth object within userSlice
  userAuth: {
    id: null,
    email: null,
    usernameAuthCopy: null,
    username: null,
    userId: null,
  },
};

// name: 'userAuth' is... state.user
// name: 'userAuthSDFG' is... state.userSDFG

//
export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  // actions mixed with reducers.
  reducers: {
    setUserAuth: (state, action: PayloadAction<userAuth>) => {
      /** 
      Property 'userAuth' does not exist on type 'WritableDraft<UserAuthState>' 

       */
      state.userAuth = action.payload;
      // state = action.payload; // entire payload is userAuth state
    },
  },
});

export const { setUserAuth } = userAuthSlice.actions;

/** 
 * 
 * actions - function that holds a payload.. void function...payload is used to update state
 * reducers - actual thing that updates state. glorified switch stmnt
 * selectors - glorified state accessor .. like a key or index.. selector memoized things like the return value
 
*/

//https://javascript.plainenglish.io/styled-components-in-next-js-9a4e84278bdb
/**
 * Property 'userAuth' does not exist on type '{ userReducer: UserAuthState; }'
 */
export const selectUserAuth = (state: RootState) => state;
//.userAuth.user;

export default userAuthSlice.reducer;
