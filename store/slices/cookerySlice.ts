import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CookeryState {
  cuisine: string | null;
  difficulty: number | null;
  image: string | null;
  ingredients: string[] | null;
  name: string | null;
  steps: string[] | null;
  time: number | null;
  _id: string;
}

const initialState = [] as unknown as CookeryState[];

const cookerySlice = createSlice({
  name: "cookery",
  initialState,
  reducers: {
    setIds(state, action: PayloadAction<{ ids: string[] }>) {
      const posts = action.payload.ids.map((id: any) => {
        return {
          _id: id._id,
          cuisine: null,
          difficulty: null,
          image: null,
          ingredients: null,
          name: null,
          steps: null,
          time: null,
        };
      });

      return posts;
    },
    fillData(state, action: PayloadAction<CookeryState>) {
      state.find((i) => {
        if (i._id === action.payload._id) {
          i.cuisine = action.payload.cuisine;
          i.difficulty = action.payload.difficulty;
          i.image = action.payload.image;
          i.ingredients = action.payload.ingredients;
          i.name = action.payload.name;
          i.steps = action.payload.steps;
          i.time = action.payload.time;
        }
      });
    },
  },
});

export const { setIds, fillData } = cookerySlice.actions;
export default cookerySlice.reducer;
