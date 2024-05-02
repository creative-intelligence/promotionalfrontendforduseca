import React from "react";
import Navbar from "../layouts/Navbar";
import Desk from "../components/Desk";
import Register from "../layouts/Register";
import Faq from "../layouts/Faq";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <>
      <div className="font-roboto">
        <Navbar />
        <Desk />
        <Register/>
        <Faq/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
