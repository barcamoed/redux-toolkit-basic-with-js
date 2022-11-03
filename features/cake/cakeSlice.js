const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numberOfCakes:10
}
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numberOfCakes--; // redux toolkit uses immer.js under the hood to handle state, hence we can mutate state directly here
        },
        reStocked:(state,action)=>{
            state.numberOfCakes += action.payload;
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions // toolkit also creates action creators itself, we just need to export it