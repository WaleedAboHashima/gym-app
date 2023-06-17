import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import { useEffect, useState } from "react";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Club from "./pages/Club";
import Pay from "./pages/Pay";
import ClubSub from "./pages/ClubSub";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";
import AddClub from "./pages/Admin/AddClub";
import AllClubs from "./pages/Admin/AllClubs";
import Img from "./pages/Admin/Img";
import Uses from "./pages/Admin/Uses";
import Socail from "./pages/Admin/Socail";
import Payments from "./pages/Admin/Payments";
import Reports from "./pages/Admin/Reports";
import Complaints from "./pages/Admin/Complaints";
import UsersQuestions from "./pages/Admin/UsersQuestions";
import Logo from "./pages/Admin/Logo";
import Icon from "./pages/Admin/Icon";
import Cookies from "universal-cookie";
import EditClub from "./pages/Admin/EditClub";
import EditPersonalClub from "./pages/Club/EditClub";
import ClubReport from "./pages/Club/ClubReport";
import AddSubscribes from "./pages/Club/AddSubscribes";

import VerifyPlayer from "./pages/Club/VerifyPlayer";
import PlayerCard from "./pages/Club/PlayerCard";

function App() {
  const clubsData = [
    {
      id: 1,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 2,
      name: "هامر جيم ",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 3,
      name: "جيم البطولة",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 4,
      name: "تراي جيم",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 5,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 6,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 7,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 8,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 9,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 10,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 11,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 12,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
    {
      id: 13,
      name: "حسن جسمك",
      des: "وصف النادي وصف النادي وصف النادي",
    },
  ];
  const [active, setActive] = useState("");
  const [activeBar, setActiveBar] = useState("/");
  const cookies = new Cookies();
  const [bar, setBar] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("admin")) setActiveBar("");
  }, []);
  return (
    <div className="App ">
      <Navbar
        bar={bar}
        setBar={setBar}
        setActive={setActive}
        setActiveBar={setActiveBar}
        activeBar={activeBar}
        active={active}
      />
      <Routes>
        <Route path="/" element={<Home bar={bar} />} />
        <Route path="/auth/reg" element={<Register />} />
        <Route
          path="/auth/login"
          element={<Login setActive={setActive} setActiveBar={setActiveBar} />}
        />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:id" element={<Club />} />
        <Route path="/pay/:id" element={<Pay />} />
        <Route
          path="/subscribe/:club_id"
          element={<ClubSub clubsData={clubsData} />}
        />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/questions" element={<Questions />} />

        <Route path="/admin/add_club" element={<AddClub />} />
        <Route
          path="/admin/edit_club/:id"
          element={<EditClub clubsData={clubsData} />}
        />
        <Route
          path="/admin/clubs"
          element={<AllClubs clubsData={clubsData} />}
        />
        {cookies.get("_auth_token") &&
        cookies.get("_auth_role") === "65100109105110" ? (
          <>
            <Route path="/admin/imgs" element={<Img />} />
            <Route path="/admin/uses" element={<Uses />} />
            <Route path="/admin/socail" element={<Socail />} />
            <Route path="/admin/payments" element={<Payments />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/complaints" element={<Complaints />} />
            <Route path="/admin/questions" element={<UsersQuestions />} />
            <Route path="/admin/imgs/logo" element={<Logo />} />
            <Route path="/admin/imgs/icon" element={<Icon />} />
          </>
        ) : (
          <>
            <Route
              path="/club/edit"
              element={<EditPersonalClub clubsData={clubsData} />}
            />
            <Route path="/club/report" element={<ClubReport />} />
            <Route path="/club/subscribe" element={<AddSubscribes />} />
            <Route path="/club/verify_player" element={<VerifyPlayer />} />

            <Route
              path="/club/player"
              element={<PlayerCard clubsData={clubsData} />}
            />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
