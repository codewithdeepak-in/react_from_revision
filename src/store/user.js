import { createSlice } from "@reduxjs/toolkit";
// A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.


const Users = createSlice({
    name: "users",
    initialState: {
        type: 'Guest', 
        array: []
    },
    reducers:{
        addUser: (state, action) => {
            state.array.push(action.payload)
        }
    }
})

export const { addUser } = Users.actions;
export default Users.reducer;