import Ticket from "../model/ticket.model.js";

export const book= async (req,res)=>{
    try{
        const {name,from,to,date,travelclass}=await req.body;
        const bookedTicket=new Ticket({
            name,
            from,
            to,
            date,
            travelclass
        })
        bookedTicket.save()
        res.status(201).json({message:"Your ticket is booked!!"})
    } catch (error) {
        console.log("Error: "+ error.message)
        res.status(500).json({message:"Internal server error"})
    }
}