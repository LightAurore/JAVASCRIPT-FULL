

// const mongoose = require("mongoose");

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/testDB", { useNewUrlParser: true, useUnifiedTopology: true });

// // Create schema for the table
// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     age: { type: Number, required: true }
// });

// // Create model
// const User = mongoose.model("User", userSchema);

// console.log("Database and table created successfully.");



var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});