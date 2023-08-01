import { configureStore } from "@reduxjs/toolkit";
import Super_Counter_Slice from "./Super_Counter_Slice";



const store = configureStore({

    reducer:{

        reducer:Super_Counter_Slice
    }

})

export default store