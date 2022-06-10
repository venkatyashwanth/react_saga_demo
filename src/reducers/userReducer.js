import {createReducer} from '@reduxjs/toolkit'

const initialSate = {
    name: "Yashwanth",
    age: 29
}

const userReducer = createReducer(initialSate,(builder)=>{
    builder.addCase('UPDATE_NAME_SuCCESS',(state,action)=>{
        state.name = action.payload
    })
})

export default userReducer;