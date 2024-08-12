import React, { useState } from 'react';

function Meals() {
  const [orderDetails, setOrderDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const formData = new FormData(e.target);
    const order = {
      trainNumber: formData.get('train-number'),
      seatNumber: formData.get('seat-number'),
      mealCategory: formData.get('meal-category'),
      mealItem: formData.get('meal-item'),
      quantity: formData.get('quantity'),
      specialRequests: formData.get('special-requests'),
    };

    // Set order details to display the confirmation message
    setOrderDetails(order);
    console.log(order);
    // Hide the confirmation message and reset the form after 4 seconds
    setTimeout(() => {
      setOrderDetails(null);
      e.target.reset();
    }, 4000);
  };

  return (
    <>
      <div
        className='flex'
        style={{
          backgroundImage: "url('/images/background_image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div id="menu" className="w-full md:w-1/2 p-2">
          <h1 className="bg-black text-white text-2xl p-4 text-center mt-20 ml-20 rounded-md">Menu</h1>
          <div
            className='flex flex-col item-center justify-center ml-20'
            style={{
              backgroundImage: "url('/images/menu.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '5%',
            }}
          >
            <div
              className="menu-category mt-4 w-3/4 ml-24"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                borderRadius: '5%',
              }}
            >
              <h3 className="text-xl font-semibold text-center">Breakfast</h3>
              <ul className="list-disc ml-6">
                <li>Pancakes - ₹40</li>
                <li>Omlette - ₹20</li>
                <li>Fruit salad - ₹20</li>
                <li>Medhu Vada - ₹50</li>
                <li>Rice/Rava Idli - ₹50</li>
                <li>Sambhar (Carrot & Beans) - ₹30</li>
                <li>Coconut Chutney - ₹20</li>
                <li>Veg. Uppma - ₹50</li>
                <li>Veg. Cutlet - ₹50</li>
                <li>Stuffed Parantha - ₹20</li>
              </ul>
            </div>
            
            <div className="menu-category mt-4 w-3/4 ml-24"
                style={{ 
                 backgroundColor: 'rgba(255, 255, 255, 0.75)',
                borderRadius: '5%'
                }}>
                <h3 className="text-xl font-semibold text-center">Lunch</h3>
                <ul className="list-disc ml-6">
                <li>Chicken Sandwich - ₹50</li>
                <li>Vegetable Salad - ₹20</li>
                <li>Grilled Fish - ₹90</li>
                <li>Jeera Pulao - ₹50</li>
                <li>Aloo Gobhi/ Bhindi Kurkuri - ₹20</li>
                <li>Paneer Butter Masala - ₹90</li>
                <li>Dal Makhni - ₹40</li>
                <li>Kadhai Chicken - ₹90</li>
                </ul>
            </div>
            <div className="menu-category mt-4 w-3/4 ml-24"
                style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                borderRadius: '5%'
            }}>
                <h3 className="text-xl font-semibold text-center">Snacks</h3>
                <ul className="list-disc ml-6">
                <li>Chips - ₹10</li>
                <li>Chocolate Bar - ₹10</li>
                <li>Fruit Juice - ₹15</li>
                <li>Flavoured Milk - ₹15</li>
                <li>Branded Lassi - ₹25</li>
                </ul>
                </div>
            <div className="menu-category mt-4 w-3/4 ml-24 mb-4"
                style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                borderRadius: '5%'
            }}>
                <h3 className="text-xl font-semibold text-center">Dinner</h3>
                <ul className="list-disc ml-6">
                     <li>Chana Masala - ₹100</li>
                    <li>Rice and Tadka Dal - ₹80</li>
                    <li>Spicy Dal with Eggs - ₹70</li>
                    <li>Chicken Biryani - ₹100</li>
                    <li>Veg. Biryani - ₹80</li>
                    <li>Butter Chicken - ₹70</li>
                </ul>
            </div>
            </div>
        </div>
        <div
          id="order-form"
          className="w-2xl md:w-1/3 p-2 ml-36 mt-20 mb-56"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            borderRadius: '10%',
          }}
        >
          <form id="order-meals-form" onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-lg mt-4">
            <caption><h2 className="text-2xl font-semibold mb-4">Order Your Meals</h2></caption>
            <div className="mb-4">
              <label htmlFor="train-number" className="block text-gray-700">Train Number:</label>
              <input type="text" id="train-number" name="train-number" placeholder="Enter train number" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="seat-number" className="block text-gray-700">Seat Number:</label>
              <input type="text" id="seat-number" name="seat-number" placeholder="Enter seat number" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="meal-category" className="block text-gray-700">Meal Category:</label>
              <select name="meal-category" id="meal-category" required className="w-full p-2 border rounded">
                <option value="">Select Your Category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="snacks">Snacks</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="meal-item" className="block text-gray-700">Meal Item:</label>
              <input type="text" name="meal-item" id="meal-item" placeholder="Enter meal item" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-gray-700">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" value="1" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="special-requests" className="block text-gray-700">Special Requests:</label>
              <input type="text" name="special-requests" id="special-requests" placeholder="Any Special Requests" className="w-full p-2 border rounded" />
            </div>
            <input type="submit" value="Order Now" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600" />
          </form>

          {orderDetails && (
            <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Order Placed Successfully!</h3>
              <p><strong>Train Number:</strong> {orderDetails.trainNumber}</p>
              <p><strong>Seat Number:</strong> {orderDetails.seatNumber}</p>
              <p><strong>Meal Category:</strong> {orderDetails.mealCategory}</p>
              <p><strong>Meal Item:</strong> {orderDetails.mealItem}</p>
              <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
              <p><strong>Special Requests:</strong> {orderDetails.specialRequests || 'None'}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Meals;
