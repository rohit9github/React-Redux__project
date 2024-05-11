import{configureStore} from "@reduxjs/toolkit";
import  userDetails  from "../actions/user-actons";
export const store = configureStore({
    reducer:{ 
        app : userDetails
    }
})