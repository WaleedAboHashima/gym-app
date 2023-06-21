import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const api = `https://gyms-s47e.onrender.com/user/clubs/filter?lat=${
  localStorage.getItem("lat")
    ? localStorage.getItem("lat")
    : "30.452223906834412"
}&long=${
  localStorage.getItem("long")
    ? localStorage.getItem("long")
    : "31.18772896361782"
}&filter=`;

const initialState = {
  data: [],
  status: "",
  state: "",
  error: "",
  loading: false,
};

export const FilterClubsHandler = createAsyncThunk(
  "FilterClubsSlice/FilterClubsHandler",
  async (arg) => {
    try {
      const response = await axios.get(api + arg.filter);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (err) {
      return {
        message: err.response.data.error,
        status: err.response.status,
      };
    }
  }
);

const FilterClubs = createSlice({
  name: "FilterClubsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FilterClubsHandler.fulfilled, (state, action) => {
      state.loading = true;
      switch (action.payload.status) {
        case 200:
          state.data = action.payload.data;
          state.loading = false;
          state.error = "";
          state.state = "Success";
          state.status = action.payload.status;
          break;
        case 404:
          state.data = [];
          state.loading = false;
          state.error = action.payload.message;
          state.state = "Error";
          state.status = action.payload.status;
          break;
        default:
          state.data = [];
          state.loading = false;
          state.error = "Errors";
          state.state = "Error";
          state.status = action.payload.status;
          break;
      }
    });
    builder.addCase(FilterClubsHandler.rejected, (state) => {
      state.data = [];
      state.loading = false;
      state.status = 500;
      state.error = "Server Error";
      state.state = "Rejected";
    });
    builder.addCase(FilterClubsHandler.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = "";
      state.state = "Pending";
      state.status = "";
    });
  },
});

export default FilterClubs.reducer;
