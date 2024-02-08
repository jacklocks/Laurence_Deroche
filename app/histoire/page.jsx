import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-4xl text-center">Mon histoire</h1>
        <p className="h-screen"></p>
        <Footer />
      </div>
    </>
  );
};

export default page;
