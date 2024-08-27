import User from "../models/User.js";
//create
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      message: "Successfully created",
      success: true,
      data: savedUser,
    });
  } catch (error) {
    console.error("Error creating User:", error);
    res.status(500).json({
      message: "Failed to create User",
      success: false,
    });
  }
};
//update
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "Successfully updated",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating User:", error);
    res.status(500).json({
      message: "Failed to update",
      success: false,
    });
  }
};
//delete
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      message: "Successfully deleted",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting User:", error);
    res.status(500).json({
      message: "Failed to delete",
      success: false,
    });
  }
};
//get single
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      message: "User Found",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      success: false,
    });
  }
};
//get all
export const getAllUser = async (req, res) => {

  try {
    const users = await User.find({})
    
    res.status(200).json({
      message: "Successfull",
      success: true,
  
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      success: false,
    });
  }
};