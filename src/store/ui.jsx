import { createSlice } from "@reduxjs/toolkit"

const initialUiState = {
    showModal: false,
    showUpdateModal: false
}

const uiSlice = createSlice({
    name:"ui",
    initialState:initialUiState,
    reducers:{
        setShowModal(state){
            state.showModal = !state.showModal;
        },
        setUpdateModal(state){
            state.showUpdateModal = !state.showUpdateModal;
        },

    }
});


 export default uiSlice.reducer;
 export const uiActions = uiSlice.actions;

