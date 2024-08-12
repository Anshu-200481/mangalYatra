import express from "express";
import { book } from "../controller/ticket.controller.js";
const router=express.Router()

router.post("/bookticket",book);

export default router;