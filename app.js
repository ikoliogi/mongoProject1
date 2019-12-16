// Third party libraries
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

// Require Mongodb connection and Models
require("./config/db");

// Initialize my express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("OK");
});

app.get("/users", (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
});

app.get("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    User.findById(userId, (err, users) => {
        res.json(users);
    });
});

app.post("/users", (req, res) => {
    const u = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    u.save().then(() => {
        res.json({
            message: "user created"
        });
    });
});

app.delete("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    User.deleteOne({_id: userId}, (err) => {
        res.json({
            message: "user deleted"
        });
    });
});


/*MongoDB Compass*/

