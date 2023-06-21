import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const api = "https://gyms-s47e.onrender.com/user/club?search=";

const initialState = {
    data: [],
    status: "",
    state: "",
    error: "",
    loading: false,
};

export const SearchClubHandler = createAsyncThunk(
    "SearchSlice/SearchClubHandler",
    async (arg) => {
        try {
            const response = await axios.get(api + arg.search);
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

const SearchByName = createSlice({
    name: "SearchSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SearchClubHandler.fulfilled, (state, action) => {
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
        builder.addCase(SearchClubHandler.rejected, (state) => {
            state.data = [];
            state.loading = false;
            state.status = 500;
            state.error = "Server Error";
            state.state = "Rejected";
        });
        builder.addCase(SearchClubHandler.pending, (state) => {
            state.loading = true;
            state.data = [];
            state.error = "";
            state.state = "Pending";
            state.status = "";
        });
    },
});

export default SearchByName.reducer;
