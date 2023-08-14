import { createSlice } from '@reduxjs/toolkit';

const CountSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        }, 
        decrement: (state) => {
            if(state.count === 0){
                state.count = 0;
            }else{
                state.count -= 1;
            }
        }
    }
});

export const { increment, decrement } = CountSlice.actions; // Export action creators
export default CountSlice.reducer; // Export the reducer function
