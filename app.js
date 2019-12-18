// Third party libraries
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

// Require Mongodb connection and Models
require("./config/db");

// Require Controllers
const UsersController = require("./controllers/UsersController");
const ProductsController = require("./controllers/ProductsController");
const CategoriesController = require("./controllers/CategoriesController");

// Initialize my express app
const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("OK");
});


// User Routes
app.get("/users", UsersController.list);
app.get("/users/:userId", UsersController.getOne);
app.post("/users", UsersController.create);
app.delete("/users/:userId", UsersController.deleteOne);
app.put("/users/:userId", UsersController.update);

// Products Routes
app.get("/products", ProductsController.list);
app.get("/products/:productId", ProductsController.getOne);
app.post("/products", ProductsController.create);
app.delete("/products/:productId", ProductsController.deleteOne);
app.put("/products/:productId", ProductsController.update);
app.get("/products/cat/:categoryId", ProductsController.listByCategory);

//Categories Routes
app.get("/categories", CategoriesController.list);
app.get("/categories/:categoryId", CategoriesController.getOne);
app.post("/categories", CategoriesController.create);
app.delete("/categories/:categoryId", CategoriesController.deleteOne);
app.put("/categories/:categoryId", CategoriesController.update);

/*MongoDB Compass*/

