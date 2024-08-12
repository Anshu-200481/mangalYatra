import React, { useState } from 'react';
// import { useForm, SubmitHandler } from "react-hook-form"

function Ticket() {
    const [formData, setFormData] = useState({
        name: '',
        from: '',
        to: '',
        date: '',
        travelClass: 'sleeper',
    });

    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/book-ticket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const result = await response.json();
                setConfirmationMessage(`Your ticket from ${formData.from} to ${formData.to} on ${formData.date} for ${formData.name} in ${formData.travelClass} class has been booked.`);
                console.log(result);
    
                // Reset the form
                setFormData({
                    name: '',
                    from: '',
                    to: '',
                    date: '',
                    travelClass: 'sleeper',
                });
    
                // Hide confirmation message after 4 seconds
                setTimeout(() => {
                    setConfirmationMessage('');
                }, 4000);
            } else {
                console.error('Failed to book ticket');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <>
            <div
                className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/background_image.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div>
                    <h1 className='text-2xl font-semibold mt-24 mb-8 ml-64 mr-64 p-2 bg-white text-center rounded-md'>
                        Book Your Tickets
                    </h1>
                </div>
                <div className='w-2xl mx-auto p-6 bg-white shadow-md rounded-md mb-8'
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.75)', borderRadius: '5%'
                    }}>
                    <form id="booking-form" onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
                        <div className="form-group mb-4 flex items-center">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded ml-4"
                            />
                        </div>
                        <div className="form-group mb-4 flex items-center">
                            <label htmlFor="from" className="block text-gray-700 font-bold mb-2">From:</label>
                            <input
                                type="text"
                                id="from"
                                value={formData.from}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded ml-4"
                            />
                        </div>
                        <div className="form-group mb-4 flex items-center">
                            <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To:</label>
                            <input
                                type="text"
                                id="to"
                                value={formData.to}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded ml-4"
                            />
                        </div>
                        <div className="form-group mb-4 flex items-center">
                            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date of Journey:</label>
                            <input
                                type="date"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded ml-4"
                            />
                        </div>
                        <div className="form-group mb-4 flex items-center">
                            <label htmlFor="class" className="block text-gray-700 font-bold mb-2">Class:</label>
                            <select
                                id="class"
                                value={formData.travelClass}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded ml-4"
                            >
                                <option value="sleeper">Sleeper</option>
                                <option value="ac">AC</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Book Ticket"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                        />
                    </form>
                    {confirmationMessage && (
                        <div className="mt-4 p-4 bg-green-200 text-green-800 rounded">
                            {confirmationMessage}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Ticket;
