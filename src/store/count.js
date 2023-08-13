import { createSlice } from '@reduxjs/toolkit';


export const CountReducer = createSlice({
    name:'count',
    initialState:{
        list: [
            {id:1, title:'Pulp fiction'},
            {id:2, title:'Rambo'},
            {id:3, title:'Karnav Maleshvari'},
            {id:4, title:'Kamla Prashad Ambubachi'},
            {id:5, title:'Swanimi Vivekananda'},
        ]
    },
    reducers:{

    }
});

export default CountReducer.reducer;