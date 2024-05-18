import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";


// create action


export const createUser = createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
    const response = await fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    try{
        const result = await response.json();
        return result;
    }
    catch(error){
        console.log(error);
        return rejectWithValue(error.message);
    }
});

// read action

export const  showUser = createAsyncThunk("showUser",async(args,{rejectWithValue})=>{

    const response = await fetch("http://localhost:3000/users",{
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
    

// delete action


export const deleteUser = createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
    const response = await fetch(`http://localhost:3000/users/${id}`,{
        method:"DELETE",
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


// update action


export const updateUserData = createAsyncThunk("updateUserData",async(data,{rejectWithValue})=>{
    const response = await fetch(`http://localhost:3000/users/${data.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
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
            })

            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
               const {id} = action.payload;
               if(id){
                state.users = state.users.filter((v,i)=>v.id!== id)
               }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(updateUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((v,i)=>
                    v.id === action.payload.id? action.payload : v
                )
                
            })
            .addCase(updateUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
  
})

export default userDetails.reducer;