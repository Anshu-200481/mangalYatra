import Contact from "../model/contact.model.js";

export const contact= async (req,res)=>{
    try{
        const{name,email,message}= await req.body;
        const contactus=new Contact({
            name,
            email,
            message
        })
        contactus.save()
        res.status(201).json({message:"Your message has been sent!!"})
    } catch (error) {
        console.log("Error: "+error.message)
        res.status(500).json({message:"Internal server error"})
    }
}