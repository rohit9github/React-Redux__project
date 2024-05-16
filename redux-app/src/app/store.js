import{configureStore} from "@reduxjs/toolkit"
import  userDetails  from "../features/userDetailsslice"
export const store = configureStore({
    reducer:{ 
        app:userDetails
    }
})