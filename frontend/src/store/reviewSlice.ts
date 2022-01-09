// review slice first.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Obj { }

type review = {
  id: number | null,
  rating: number | null,
  body: string | null,
  createdAt: string | null,
  dateLastUpdated: string | null,
  numIsHelpful: number | 0,
};

interface ReviewState {
  review: review;
}

/**
 *
 *
 *
 * nest review object in user state {
 *
 * }
 */

// 36->47 reviewSlice
const initialState: ReviewState = {
  // 38 ->47 review object within userSlice
  review: {
    id: null,
    rating: null,
    body: null,
    createdAt: null,
    dateLastUpdated: null,
    numIsHelpful: 0,
  },
};

// name: 'review' is... state.user
// name: 'reviewSDFG' is... state.userSDFG

//
export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  // actions mixed with reducers.
  reducers: {
    setReview: (state, action: PayloadAction<review>) => {
      /** 
      Property 'review' does not exist on type 'WritableDraft<ReviewState>' 

       */
      state.review = action.payload;
      // state = action.payload; // entire payload is review state
    },
  },
});

export const { setReview } = reviewSlice.actions;

/** 
 * 
 * actions - function that holds a payload.. void function...payload is used to update state
 * reducers - actual thing that updates state. glorified switch stmnt
 * selectors - glorified state accessor .. like a key or index.. selector memoized things like the return value
 
*/

//https://javascript.plainenglish.io/styled-components-in-next-js-9a4e84278bdb
/**
 * Property 'review' does not exist on type '{ userReducer: ReviewState; }'
 */
export const selectReview = (state: RootState) => state;
//.review.user;

export default reviewSlice.reducer;
