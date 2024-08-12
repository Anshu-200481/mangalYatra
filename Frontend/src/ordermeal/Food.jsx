import React from "react";
import Navbar from "../components/Navbar";
import Meals from "../components/Meals";
import Footer from "../components/Footer";

function Food() {
    return(
        <>
            <Navbar/>
            <div className="min-h-screen">
                <Meals/>
            </div>
            <Footer/>
        </>
    )
}
export default Food;