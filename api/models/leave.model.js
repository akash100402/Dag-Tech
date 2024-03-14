import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema(
  {
    reason: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date, 
      required: true, 
    },
    endDate: {
      type: Date, 
      required: true, 
    },
    pdfUrl: {
      type: String,
      required: true, 
    },
    description: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Leave = mongoose.model("Leave", leaveSchema);

export default Leave;
