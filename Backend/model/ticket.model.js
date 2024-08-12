import mongoose from "mongoose";

const ticketSchema=mongoose.Schema({
    name:{
        type:String,
    },
    from:{
        type:String,
    },
    to:{
        type:String,
    },
    date:{
        type:Date,
    },
    travelclass:{
        type:String,
    }
})
const Ticket=mongoose.model("Ticket",ticketSchema)
export default Ticket;