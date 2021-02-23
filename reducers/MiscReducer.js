// Initial State
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "BoilerPlate",
};

//Reducer
const miscSlice = createSlice({
    //slice name -> all the actions dispatched to reducers of this slice will accompany this name i.e ui/[action.type]
    name: "misc",
    //slice initial state
    initialState: initialState,
    //slice reducers
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
    },
});

//getting actions from miscSlice
export const { changeName } = miscSlice.actions;

//getting reducers from miscSlice
const MiscReducer = miscSlice.reducer;

export default MiscReducer;
