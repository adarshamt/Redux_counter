import {createSlice} from '@reduxjs/toolkit'


const Super_Counter_Slice=createSlice({

    name:"Super_Counter",
    initialState:0,
    reducers:{

        add:(state)=> {

            return state = state+1
        },

        minus:(state)=>{
            return state= state-1
        },

        reset:(state)=>{

            return state =0
        }


    }
})

export const { add,minus,reset} = Super_Counter_Slice.actions

export default Super_Counter_Slice.reducer