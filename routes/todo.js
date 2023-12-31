const router = require("express").Router();
const Todo = require("../models/todo");

// routes
router.post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    newTodo.save().then(() => {
        console.log("Successfully added");
        res.redirect("/");
    }).catch((err) => console.log(err));
}).get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id }).then(() => {
        console.log("Successfully deleted");
        res.redirect("/");
    }).catch((err) => console.log(err));
})

module.exports = router;