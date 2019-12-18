const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

global.User = mongoose.model("User", {
    firstName: String,
    lastName: String,
    email: String
});

global.Product = mongoose.model("Product", {
    category: mongoose.Types.ObjectId, // category._id  type is neither a number nor string, use
    title: String,
    miniDescription: String,
    description: String,
    price: Number,
    sale: Number,
    photo: String
});

global.Category = mongoose.model("Category", {
   title: String
});

// global.* visible in all files (and app.js)
