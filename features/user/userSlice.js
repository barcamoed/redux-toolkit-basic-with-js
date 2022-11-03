const { createAsyncThunk } = require('@reduxjs/toolkit');
const axios  = require('axios');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    loading:false,
    data:[],
    error:''
}

// createAsyncThunk() generates pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        // console.log('Responseeeeeeee', response);
        return response.data;
    })
})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.data = action.payload;
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.data = [];
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers