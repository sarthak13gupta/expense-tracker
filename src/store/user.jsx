import {createSlice} from "@reduxjs/toolkit";

const initialUserState = {
    userName:"",
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers:{
        addUserName(state, action){
            state.userName = action.payload;
            console.log(state.userName);
        }

    }
});


export default userSlice.reducer;

export const userActions = userSlice.actions;
