import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./auth/Login";
import RegisterReducer from "./auth/Register";
import AllClubsReducer from "./user/GetClubs";
export default configureStore({
    reducer: {
        Login: LoginReducer,
        Register: RegisterReducer,
        GetClubs: AllClubsReducer,
    }
})