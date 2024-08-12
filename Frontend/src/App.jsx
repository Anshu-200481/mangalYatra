import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Train from "./schd/train";
import Book from "./bticket/bookticket";
import Food from "./ordermeal/Food";
import About from "./about/About";
import Contact from "./contact/Contact";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/schd" element={<Train/>} />
        <Route path="/bookticket" element={<Book/>} />
        <Route path="/meals" element={<Food/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </>
  )
}
export default App;