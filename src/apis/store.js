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
import GetClubReducer from "./user/GetClub";
import SubReducer from "./user/SubSelection";
import DeleteClubReducer from "./admin/DeleteClub";
import GetReportsReducer from "./admin/Reports";
import EditClubReducer from "./admin/EditClub";
import ChangeIconReducer from "./admin/ChangeIcon";
import ChangeLogoReducer from "./admin/ChangeLogo";
import AddBannerReducer from "./admin/AddBanner";
import AppDesignReducer from "./admin/AppDesign";
import SearchClubReducer from "./user/SearchClub";
import EditPersonalClubReducer from "./clubs/EditPersonalClub"
import AddSubReducer from "./clubs/AddSubscription"
import ConfirmPaymentReducer from "./user/ConfirmPayment"
import ClubAuthReducer from "./user/GetClubAuth"
export default configureStore({
  reducer: {
    MakeSub: SubReducer,
    MakeReport: ReportReducer,
    Rules: RulesReducer,
    Login: LoginReducer,
    Register: RegisterReducer,
    GetClubs: AllClubsReducer,
    GetClub: GetClubReducer,
    SearchClub: SearchClubReducer,
    ConfirmPayment: ConfirmPaymentReducer,
    ClubAuth: ClubAuthReducer,
    //Admin
    AddBanner: AddBannerReducer,
    AppDesign: AppDesignReducer,
    GetReports: GetReportsReducer,
    AddClub: AddClubsReducer,
    EditClub: EditClubReducer,
    DeleteClub: DeleteClubReducer,
    ChangeUses: ChangeUsesReducer,
    ChangeIcon: ChangeIconReducer,
    ChangeLogo: ChangeLogoReducer,
    ChangeSocials: ChangeSocialsReducer,
    ChangeContact: ChangeContactReducer,
    Complaints: ComplaintsReducer,
    Paypal: PaypalReducer,
    AddQuestion: AddQuestionReducer,
    //Clubs
    EditPersonalClub: EditPersonalClubReducer,
    AddSub: AddSubReducer,
  },
});
