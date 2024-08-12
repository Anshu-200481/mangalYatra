import React from "react";


function Banner() {
    return <>
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center z-10 "
            style={{ 
                backgroundImage: "url('/images/background_image.jpg')", 
                backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'
            }}>
             <div id="logo" className="mb-6 relative mt-7">
                <img src="/images/TRAIN LOGO.png" alt="Logo" className="w-48 h-48 rounded-full"/>
            </div>
            <div 
                className="text-center justify-center p-8 shadow-lg w-1/2"
                style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',borderRadius: '10%'
                }}
            >
                <h1 className="text-3xl font-bold" >WELCOME TO MANGAL YATRA</h1>
                <p className="text-xl mt-4">Book your train tickects here with ease</p>
                <p className="text-pink-500 text-xl mt-2">**&hearts;We make your journey wonderful&hearts;**</p>
                <p className="text-xl mt-2">Your one-stop solution for booking train tickects and ordering meals.</p>
                <div id="maintag" className="mt-6">
                    <a href="/bookticket" className="inline-block border-2 border-black bg-black bg-opacity-70 text-white px-4 py-2 rounded hover:bg-opacity-100">
                        START BOOKING
                    </a>
                </div>
            </div>
            
        </div>
    </>
}
export default Banner;