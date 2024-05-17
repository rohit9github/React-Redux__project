import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";


// create action


export const createUser = createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
    const response = await fetch("https://664605f051e227f23aad6f56.mockapi.io/reduxcrud",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    try{
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        return rejectWithValue(error.message);
    }
});

// read action

export const  showUser = createAsyncThunk("showUser",async({rejectWithValue})=>{

    const response = fetch("https://664605f051e227f23aad6f56.mockapi.io/reduxcrud",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    try{
        const result = await response.json();
        return result;
    }
    catch(error){
        console.log(error);
        return rejectWithValue(error.message);
    }

})
    

export const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        users:[],
        loading:false,
        error: null,
    },  
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
  
})

export default userDetails.reducer;