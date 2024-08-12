import React, { useState } from 'react';

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(e.target); // Create a FormData instance from the form
    // Extract values from the formData
    const message ={
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };
    
    // Print the form data to the console
    console.log(message);
    // Show the submitted message
    setSubmitted(true);
  
    // Hide the submitted message after 4 seconds and reset the form
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset(); // Reset the form fields
    }, 4000); // Changed to 4000 ms to match your 4-second requirement
  };

  

  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center z-10"
        style={{
          backgroundImage: "url('/images/background_image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <main className="p-8">
          <section
            className="contact-section text-center justify-center p-8 shadow-lg w-2/3 mt-16 ml-56"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              borderRadius: '10%',
            }}
          >
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="mb-6 text-lg">
              If you have any questions or need assistance, please feel free to reach out to us!
            </p>

            <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="block text-lg font-semibold">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  placeholder="Enter your name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-lg font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  placeholder="Enter your email ID"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="block text-lg font-semibold">
                  Message:
                </label>
                <textarea
                  id="message"
                  name='message'
                  rows="5"
                  placeholder="Write some message..."
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
              />
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-md">
                Your message has been submitted successfully!
              </div>
            )}

            <h2 className="text-2xl font-semibold mt-8">Our Contact Information</h2>
            <p className="text-lg">Email: support@mangalyatra.com</p>
          </section>
        </main>
      </div>
    </>
  );
}

export default ContactUs;
