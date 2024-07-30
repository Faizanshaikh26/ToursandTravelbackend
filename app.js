const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Db connection established"))
  .catch((err) => console.log(err));
const userController = require("./controllers/user");
const contactController = require("./controllers/contact");
const bookingController = require("./controllers/booking");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(
  cors({
    origin: ["http://localhost:5173",
      process.env.CLIENT_URL
    ],
    methods: ["GET", "POST", " DELETE", " PUT"],
  })
); // Enable CORS for all requests

app.use(express.json());
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.post("/contact", contactController.contactForm);
app.post("/booking", bookingController.tourBooking);

app.listen(port, () => console.log(`Server listening on ${port}`));
