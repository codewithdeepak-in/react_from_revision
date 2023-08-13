// configuring the store. 

import { configureStore } from "@reduxjs/toolkit";
import CountReducer from './count'
import Users from './user'

const Store = configureStore({
    reducer: {
        counter: CountReducer,
        users: Users
    }
})

export default Store;