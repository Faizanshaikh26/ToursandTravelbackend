const Booking = require("../models/booking");

exports.tourBooking = async (req, res) => {
  const newBooking = new Booking({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    dateOfTravel: req.body.dateOfTravel,
    duration: req.body.duration,
    holidayType: req.body.holidayType,
    budget: req.body.budget,
    travelers: req.body.travelers,
  });
  await newBooking.save();
  return res.status(200).json({
    success: true,
    message: "Booking successful!",
  });
};


