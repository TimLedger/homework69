import { createSlice } from "@reduxjs/toolkit";
import { showsList, showOne } from "./showsThunk";
import { ShowList, Show } from "../types";

interface ShowsState {
  shows: ShowList[];
  show: Show | null;
  loading: boolean; 
}

const initialState: ShowsState = {
  shows: [],
  show: null,
  loading: false,
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(showsList.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(showsList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.shows = payload;
    });

    builder.addCase(showsList.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(showOne.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(showOne.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.shows = [];
      state.show = payload;
    });

    builder.addCase(showOne.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const showsReducers = showsSlice.reducer;
