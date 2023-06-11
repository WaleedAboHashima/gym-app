import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import { useState } from "react"
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Club from './pages/Club';
import Pay from './pages/Pay';
import ClubSub from './pages/ClubSub';
import Questions from './pages/Questions';
import NotFound from './pages/NotFound';
import AddClub from "./pages/Admin/AddClub"
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
  ]
  const [bar, setBar] = useState(false)
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar bar={bar} setBar={setBar} />
        <Routes>
          <Route path='/auth/reg' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/' element={<Home bar={bar} />} />
          <Route path='/clubs' element={<Clubs clubsData={clubsData} />} />
          <Route path='/clubs/:id' element={<Club clubsData={clubsData} />} />
          <Route path="/pay/:id" element={<Pay clubsData={clubsData} />} />
          <Route path='/subscribe/:club_id' element={<ClubSub clubsData={clubsData} />}/>
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/admin/add_club" element= {<AddClub/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
