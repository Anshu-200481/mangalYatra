import React from "react";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

function Train() {
    return(
        <>
            <Navbar/>
            <div className="min-h-screen">
                <Schedule/>
            </div>
            <Footer/>
        </>
    )
}
export default Train;