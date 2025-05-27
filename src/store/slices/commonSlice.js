import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactLoading: false,
  contactMessage: { message: "", type: "" },
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setContactLoading: (state, action) => {
      state.contactLoading = action.payload;
    },
    setContactMessage: (state, action) => {
      state.contactMessage = action.payload;
    },
  },
});

export const { setContactLoading, setContactMessage } = commonSlice.actions;
export default commonSlice.reducer;
