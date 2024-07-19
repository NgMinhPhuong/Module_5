import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const asyncFuc = createAsyncThunk('getTest', async() => {
  throw new Error()
})

let initialState = {
  id: 1
};
const todo = createSlice({
    name: 'count1',
    initialState,
    reducers: {
        incre: (state, action) => {
            state = {id: 6};
            return state
          }
    },
    extraReducers:(builder) => {
      builder
      .addCase(asyncFuc.fulfilled, (state, action) => {
        console.log('fullfill');
      })
      .addCase(asyncFuc.rejected, (state, action) => {
        console.log(action);
        console.log('rejected');
      })
      .addCase(asyncFuc.pending, (state, action) => {
        console.log('pending');
      })
    }
  });
export const {incre} = todo.actions
export default todo.reducer