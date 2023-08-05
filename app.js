const express = require("express");
const mongoose = require("mongoose");
const app = express();


// Connection to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) => {
    console.log("Connect");
}).catch((err) => {
    console.log(err);
});


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "pug");

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));


app.listen(8000, () => {
    console.log("Server is listening");
});