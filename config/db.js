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

// global.User visible in all files (and app.js)
