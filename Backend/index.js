import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ticketBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema and model for the booking
const bookingSchema = new mongoose.Schema({
    name: String,
    from: String,
    to: String,
    date: String,
    travelClass: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

// Handle POST request to save form data
app.post('/api/book-ticket', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(200).json({ message: 'Ticket booked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
