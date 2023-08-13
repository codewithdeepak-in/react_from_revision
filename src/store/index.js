import { configureStore } from '@reduxjs/toolkit';
import CountSlice from './count';

export const Store = configureStore({
    reducer: {
        count: CountSlice
    }
})

export default Store.reducer;

