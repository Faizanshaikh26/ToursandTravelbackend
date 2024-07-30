const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    dateOfTravel: {
      type: Date,
      required: true,
    },
    duration: {
      type: String,
      enum: ["1-3 days", "4-7 days", "8-14 days", "15+ days"],
      required: true,
    },
    holidayType: {
      type: String,
      enum: ["Honeymoon", "Group tours", "Solo Trip"],
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    travelers: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
