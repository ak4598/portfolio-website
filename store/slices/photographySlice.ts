import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PhotographyState {}

const initialState = [] as unknown as PhotographyState[];

const photographySlice = createSlice({
  name: "photography",
  initialState,
  reducers: {
    appendId(state, action: PayloadAction<PhotographyState>) {},
    fillData(state, action: PayloadAction<PhotographyState>) {},
  },
});

export const { appendId, fillData } = photographySlice.actions;
export default photographySlice.reducer;
