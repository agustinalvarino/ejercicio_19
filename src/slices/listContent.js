import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listContent",
  initialState: [],
  reducers: {
    addContent(state, action) {
      if (!state.includes(action.payload.id)) {
        state.push(action.payload);
      } else {
        return console.log("No puedes repetir un elemento");
      }
    },
    eraseContent(state, action) {
      return state.filter((element) => element.id !== action.payload);
    },
  },
});

export const { addContent, eraseContent } = listSlice.actions;
export default listSlice.reducer;
