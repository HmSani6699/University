import React from "react";
import Footer from "../pages/Footer/Footer";
import Navber from "../Navber/Navber";
import Banner from "../pages/Home/Home/Banner/Banner";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Banner />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
