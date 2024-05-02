import React from "react";
import Ridee from "../components/Ridee";
import Navbar from "../layouts/Navbar";
import Register from "../layouts/Register";
import Faq from "../layouts/Faq";
import Footer from "../layouts/Footer";

const Rides = () => {
  return (
    <>
      <Navbar />
      <Ridee />
      <Register />
      <Faq />
      <Footer />
    </>
  );
};
export default Rides;
