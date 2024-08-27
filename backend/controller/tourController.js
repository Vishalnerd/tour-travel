import Tour from "../models/Tour.js";
//create
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      message: "Successfully created",
      success: true,
      data: savedTour,
    });
  } catch (error) {
    console.error("Error creating tour:", error);
    res.status(500).json({
      message: "Failed to create tour",
      success: false,
    });
  }
};
//upadte
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "Successfully updated",
      success: true,
      data: updatedTour,
    });
  } catch (error) {
    console.error("Error updating tour:", error);
    res.status(500).json({
      message: "Failed to update",
      success: false,
    });
  }
};
//delete
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      message: "Successfully deleted",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting tour:", error);
    res.status(500).json({
      message: "Failed to delete",
      success: false,
    });
  }
};
//get single
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      message: "Tour Found",
      success: true,
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      success: false,
    });
  }
};
//get all
export const getAllTour = async (req, res) => {
  //pagination
  const page = parseInt(req.query.page);
  console.log(page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      message: "Successfull",
      success: true,
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      success: false,
    });
  }
};

//get tour by search
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      message: "Tour Found",
      success: true,
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      success: false,
    });
  }
};

//get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      message: "Successfull",
      success: true,
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      success: false,
    });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to fetch",
    });
  }
};
