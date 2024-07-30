const model = require("../models/contact");
const Contact = model.Contact;

exports.contactForm = async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  await contact.save();

  return res.status(200).json({success: true,
    message: "Your message has been sent successfully!",
  });
  
};
