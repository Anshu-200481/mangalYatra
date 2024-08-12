import React from "react";
import Navbar from "../components/Navbar";
import Ticket from "../components/Ticket";
import Footer from "../components/Footer";

function Book() {
    return(
        <>
            <Navbar/>
            <div className="min-h-screen">
                <Ticket/>
            </div>
            <Footer/>
        </>
    )
}
export default Book;