import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import Capabilities from "./Components/Capabilities/Capabilities";
import Flavors from "./Components/Flavors/Flavors";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Certification from "./Components/Capabilities/Certification";
import Production from "./Components/Capabilities/Production";
import Design from "./Components/Capabilities/Design";
import FlavorsList from "./Components/Flavors/FlavorsList";
import Navigation from "./Components/Navigation/Navigation";
import CompanyInfo from "./Components/CompanyInfo/CompanyInfo";
import LoginPage from "./Components/LoginPage/LoginPage";
import "./media.css";
import AdminPage from "./Components/AdminPage/AdminPage";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [trackLocation, setTrackLocation] = useState(location);

  useEffect(()=>{
    setTrackLocation(location);
  },[location])

  return (
    <div className="main_container main_content">
      <CompanyInfo track={trackLocation}/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/capabilities" element={<Capabilities />}></Route>
        <Route path="/flavors" element={<Flavors />}></Route>
        <Route path='/flavors/:id' element={<FlavorsList/>}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/capabilities/certification" element={<Certification/>}></Route>
        <Route path="/capabilities/production" element={<Production/>}></Route>
        <Route path="/capabilities/design" element={<Design/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
