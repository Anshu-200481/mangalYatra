import React from 'react'

function AboutUs() {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center z-10 "
            style={{ 
                backgroundImage: "url('/images/background_image.jpg')", 
                backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'
            }}>
            <main className="p-8">
                <section className="about-section text-center justify-center p-8 shadow-lg w-2/3 mt-16 ml-56 "
                style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',borderRadius: '10%'
                }}>
                    <h1 className="text-4xl font-bold mb-6 text-red-700">About Us</h1>
                    <p className="mb-6 text-lg">
                        Welcome to Railway Management, your trusted partner for train travel. Our mission is to provide safe, reliable, and efficient rail services to our customers.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-pink-700">Our Vision</h2>
                    <p className="mb-6 text-lg">
                        We aim to revolutionize railway travel through innovation, making it accessible and enjoyable for everyone.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-pink-700">Our Mission</h2>
                    <p className="mb-6 text-lg">
                        To deliver exceptional service quality, maintain safety standards, and ensure punctuality in all our operations.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-pink-700">Our Values</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Safety: We prioritize the safety of our passengers and staff.</li>
                        <li>Integrity: We operate with honesty and transparency.</li>
                        <li>Customer Satisfaction: Our customers are at the heart of everything we do.</li>
                        <li>Innovation: We embrace change and seek continuous improvement.</li>
                    </ul>
                </section>
            </main>
        </div>
    </>
  )
}

export default AboutUs;
