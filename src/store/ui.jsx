import { createSlice } from "@reduxjs/toolkit"

const initialUiState = {
    showModal: false,
}

const uiSlice = createSlice({
    name:"ui",
    initialState:initialUiState,
    reducers:{
        setShowModal(state){
            state.showModal = !state.showModal;
        },
    }
});


 export default uiSlice.reducer;
 export const uiActions = uiSlice.actions;

