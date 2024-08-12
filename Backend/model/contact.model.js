import mongoose from "mongoose";

// Define a schema for contact form submissions
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    dateSubmitted: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
