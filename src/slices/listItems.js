import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "listItems",
  initialState: [],
  reducers: {
    addItem(state, action) {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      } else {
        return console.log("No puedes repetir un elemento");
      }
    },
    eraseItem(state, action) {
      return state.filter((element) => element.id !== action.payload);
    },
  },
});

export const { addItem, eraseItem } = themeSlice.actions;
export default themeSlice.reducer;
