import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./auth/Login";
import RegisterReducer from "./auth/Register";
import AllClubsReducer from "./user/GetClubs";
import AddClubsReducer from "./admin/AddClub";
import ChangeUsesReducer from "./admin/ChangeUses";
import ChangeSocialsReducer from "./admin/ChangeSocial";
import ChangeContactReducer from "./admin/ChangeContact";
import ComplaintsReducer from "./admin/Complaints";
import PaypalReducer from "./admin/Paypal";
import AddQuestionReducer from "./admin/AddQuestion";
import RulesReducer from "./rules";
import ReportReducer from "./user/MakeReport";
import GetClubReducer from "./user/GetClub"
import SubReducer from "./user/SubSelection"
export default configureStore({
    reducer: {
        MakeSub: SubReducer,
        MakeReport: ReportReducer,
        Rules : RulesReducer,
        Login: LoginReducer,
        Register: RegisterReducer,
        GetClubs: AllClubsReducer,
        GetClub: GetClubReducer,
        //Admin
        AddClub: AddClubsReducer,
        ChangeUses: ChangeUsesReducer,
        ChangeSocials: ChangeSocialsReducer,
        ChangeContact: ChangeContactReducer,
        Complaints: ComplaintsReducer,
        Paypal: PaypalReducer,
        AddQuestion: AddQuestionReducer,
    }
})