import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Location from "../components/Locations";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="max-w-screen-lg mx-auto lg:px-0 px-2 md:mt-16">
               <Hero />
               <About/>
               <Services/>
               <Location/>
               
      </section>
      <Footer/>
    </main>
  )
}
