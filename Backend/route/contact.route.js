import express from "express";
import { contact } from "../controller/contact.controller";
const router=express.Router()

router.post("/contact",contact);

export default router;