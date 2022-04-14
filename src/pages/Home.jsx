import React from "react";
import "../stylesheets/App.css";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
