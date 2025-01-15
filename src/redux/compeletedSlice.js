import { createSlice } from "@reduxjs/toolkit";

const compeletedSlice = createSlice({
  name: "completed",
  initialState: [
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      isDone: false,
      isImportant: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      isDone: false,
      isImportant: false,
    },
  ],
  reducers: {
    done: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { done } = compeletedSlice.actions;
export default compeletedSlice.reducer;
