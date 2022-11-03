const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfIcecreams:20
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numberOfIcecreams--; // redux toolkit uses immer.js under the hood to handle state, hence we can mutate state directly here
        },
        reStocked:(state,action)=>{
            state.numberOfIcecreams += action.payload;
        }
    },
    // extraReducers:{
    //     ['cake/ordered']:(state,action)=>{
    //         state.numberOfIcecreams--;
    //     }
    // }

    // OR using builder (recommended)
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,(state)=>{
            state.numberOfIcecreams--;
        })
    }


})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions