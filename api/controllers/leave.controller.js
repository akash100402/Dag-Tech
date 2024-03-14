import Leave from "../models/leave.model.js";

// Controller function to create a new leave request
const createLeave = async (req, res) => {
  try {
    // Extract data from the request body
    const { reason, startDate, endDate, pdfUrl, description } = req.body;

    // Get the user ID from req.user
    const userId = req.user.id;

    // Create a new leave request document
    const leave = new Leave({
      reason,
      startDate,
      endDate,
      pdfUrl,
      description,
      userId, // Assign the userId obtained from req.user
    });

    // Save the leave request to the database
    await leave.save();

    // Respond with a success message
    res
      .status(201)
      .json({ message: "Leave request created successfully.", leave });
  } catch (error) {
    // Handle errors
    console.error("Error creating leave request:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};

// Controller function to delete a leave request by ID
const deleteLeave = async (req, res) => {
  try {
    // Extract the leave ID from the request parameters
    const { leaveId } = req.params;

    // Find the leave request by ID and delete it
    await Leave.findByIdAndDelete(leaveId);

    // Respond with a success message
    res.status(200).json({ message: "Leave request deleted successfully." });
  } catch (error) {
    // Handle errors
    console.error("Error deleting leave request:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};

// Controller function to fetch all leave requests
const getLeaves = async (req, res) => {
  try {
    // Fetch all leave requests from the database
    const leaves = await Leave.find();

    // Respond with the leave requests
    res.status(200).json({ leaves });
  } catch (error) {
    // Handle errors
    console.error("Error fetching leave requests:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};

export { createLeave, deleteLeave, getLeaves };
