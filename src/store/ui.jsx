import { createSlice } from "@reduxjs/toolkit"

const initialUiState = {
    showModal: false,
    showUpdateModal: false,
    showGroupModal: false,
    groupUpdateModal: false,
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
        setGroupShowModal(state){
            state.showGroupModal = !state.showGroupModal;
        },
        setGroupUpdateModal(state){
            state.groupUpdateModal = !state.groupUpdateModal;
        },
    }
});


 export default uiSlice.reducer;
 export const uiActions = uiSlice.actions;

