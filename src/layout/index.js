import React from "react";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
const Index = ({ trackLocation, children }) => {
  return (
    <div className="main_container main_content">
      <div>
        <CompanyInfo track={trackLocation} />
        <Navigation />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Index;
