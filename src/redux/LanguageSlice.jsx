import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("appLanguage") || "en", 
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      try {
        localStorage.setItem("appLanguage", action.payload);
      } catch (e) {
        console.error("localStorage ga yozishda xato:", e);
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;