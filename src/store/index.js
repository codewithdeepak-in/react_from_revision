// configuring the store. 

import { configureStore } from "@reduxjs/toolkit";
import CountReducer from './count'


const Store = configureStore({
    reducer: {
        counter: CountReducer
    }
})

export default Store;