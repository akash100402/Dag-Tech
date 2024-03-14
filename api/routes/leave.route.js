import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createLeave,
  deleteLeave,
  getLeaves,
} from "../controllers/leave.controller.js";

const router = express.Router();

// Route to create a new leave request
router.post("/new-leave", verifyToken, createLeave);

// Route to delete a leave request
router.delete("/:leaveId", verifyToken, deleteLeave);

// Route to get all leave requests
router.get("/getLeaves", verifyToken, getLeaves);

export default router;
