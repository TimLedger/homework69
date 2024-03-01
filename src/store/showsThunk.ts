import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { ShowList, Show } from "../types";

export const showsList = createAsyncThunk<ShowList[], string>(
  'show/list',
  async (value) => {
    const response = await axiosApi.get<ShowList[] | []>('search/shows/?q=' + value);
    if (response.data) { 
      return response.data;
    }

    return [];
  },
);

export const showOne = createAsyncThunk(
  'show/one', 
  async (id: number) => {
    const response = await axiosApi.get<Show | null>('shows/' + id);
    if (response.data) { 
      return response.data;
    }

    return null;
  },
);
