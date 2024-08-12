import React from 'react';

function ScheduleTable() {
    return (
        <div className="bg-cover bg-center z-10 flex flex-col item-center justify-center"
        style={{ backgroundImage: "url('/images/background_image.jpg')", backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'
        }}>
            <div>
                <h1 className='text-2xl font-semibold  mt-24 mb-8 ml-64 mr-64 p-2 bg-white text-center'>Train Schedules</h1>
            </div>
            <table className='items-center justify-center shadow-lg w-3/4 ml-48'
            style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.75)',borderRadius: '5%'
            }}>
                <thead className="bg-gray-200 ml-42 mr-42">
                    <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Train Name</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">From</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">To</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Arrival Time</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Departure Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Rapti Ganga Express</td>
                        <td className="py-3 px-4">Dehradun</td>
                        <td className="py-3 px-4">Gorakhpur</td>
                        <td className="py-3 px-4">02:15 PM</td>
                        <td className="py-3 px-4">08:45 AM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Kathgodam Express</td>
                        <td className="py-3 px-4">Haridwar</td>
                        <td className="py-3 px-4">Moradabad</td>
                        <td className="py-3 px-4">00:59 AM</td>
                        <td className="py-3 px-4">04:07 AM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Nanda Devi AC SF Express</td>
                        <td className="py-3 px-4">Roorkee</td>
                        <td className="py-3 px-4">Ghaziabad</td>
                        <td className="py-3 px-4">00:58 AM</td>
                        <td className="py-3 px-4">03:47 AM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Lucknow SF Express</td>
                        <td className="py-3 px-4">Chandigarh</td>
                        <td className="py-3 px-4">Lucknow</td>
                        <td className="py-3 px-4">09:05 PM</td>
                        <td className="py-3 px-4">08:25 AM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Howrah Amritsar Mail</td>
                        <td className="py-3 px-4">Kokata</td>
                        <td className="py-3 px-4">Amritsar</td>
                        <td className="py-3 px-4">07:10 PM on D-1</td>
                        <td className="py-3 px-4">08:55 AM on D-3</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Bandra Terminus Express</td>
                        <td className="py-3 px-4">Roorkee</td>
                        <td className="py-3 px-4">Borivali</td>
                        <td className="py-3 px-4">02:43 PM on D-1</td>
                        <td className="py-3 px-4">10:01 PM on D-2</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Howrah-Ranchi Shatabdi Express</td>
                        <td className="py-3 px-4">Howrah</td>
                        <td className="py-3 px-4">Ranchi</td>
                        <td className="py-3 px-4">06:05 AM</td>
                        <td className="py-3 px-4">01:15 PM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Rapti Ganga Express</td>
                        <td className="py-3 px-4">Dehradun</td>
                        <td className="py-3 px-4">Gorakhpur</td>
                        <td className="py-3 px-4">02:15 PM</td>
                        <td className="py-3 px-4">08:45 AM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Ahmedabad-Mumbai Cent AC Exp</td>
                        <td className="py-3 px-4">Ahmedabad</td>
                        <td className="py-3 px-4">Mumbai</td>
                        <td className="py-3 px-4">11:40 PM</td>
                        <td className="py-3 px-4">06:00 AM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Ludhiana-New Delhi Express</td>
                        <td className="py-3 px-4">Ludhiana</td>
                        <td className="py-3 px-4">New Delhi</td>
                        <td className="py-3 px-4">04:40 PM</td>
                        <td className="py-3 px-4">10:10 PM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Gatiman Express</td>
                        <td className="py-3 px-4">Delhi</td>
                        <td className="py-3 px-4">Agra</td>
                        <td className="py-3 px-4">08:10 AM</td>
                        <td className="py-3 px-4">09:50 AM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Vande Bharat Express</td>
                        <td className="py-3 px-4">New Delhi</td>
                        <td className="py-3 px-4">Varanasi</td>
                        <td className="py-3 px-4">06:00 AM</td>
                        <td className="py-3 px-4">02:00 PM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Kamayani Express SPL</td>
                        <td className="py-3 px-4">Varanasi</td>
                        <td className="py-3 px-4">Lokmanyatilak</td>
                        <td className="py-3 px-4">02:50 PM</td>
                        <td className="py-3 px-4">10:50 PM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Surya Nagri SPL</td>
                        <td className="py-3 px-4">Jodhpur</td>
                        <td className="py-3 px-4">Bandra</td>
                        <td className="py-3 px-4">07:00 PM</td>
                        <td className="py-3 px-4">11:35 AM</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-3 px-4">Shram Shakti SPL</td>
                        <td className="py-3 px-4">New Delhi</td>
                        <td className="py-3 px-4">Kanpur</td>
                        <td className="py-3 px-4">11:55 PM</td>
                        <td className="py-3 px-4">06:30 AM</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleTable;
