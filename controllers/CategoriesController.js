const list = (req, res) => {
    Category.find({}, (err, category) => {
        res.json(category);
    });
};

const getOne = (req, res) => {
    Category.findById(req.params.categoryId, (err, category) => {
        res.json(category);
    });
};

const create = (req, res) => {
    const u = new Category({
        title: req.body.title
    });
    u.save().then(() => {
        res.json({
            message: "Category created"
        });
    });
};

const deleteOne = (req, res) => {
    Category.deleteOne({_id: req.params.categoryId}, (err) => {
        res.json({
            message: "Category deleted"
        });
    });
};

const update = (req, res) => {
    Category.updateOne({_id: req.params.categoryId}, {
        title: req.body.title
    },(err) => {
        res.json({
            message: "Category Updated"
        });
    });
};

module.exports = {
    list,
    getOne,
    create,
    deleteOne,
    update
};
