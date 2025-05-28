import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactLoading: false,
  contactMessage: { message: "", type: "" },
  isWhatwebuyDropDownOpen: false,
  isMenuOpen: false,
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
    setIsWhatWeBuyDropDownOpen: (state, action) => {
      state.isWhatwebuyDropDownOpen = action.payload;
    },
    setIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setContactLoading,
  setContactMessage,setIsWhatWeBuyDropDownOpen,setIsMenuOpen } = commonSlice.actions;
export default commonSlice.reducer;
