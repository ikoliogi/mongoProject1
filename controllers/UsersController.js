const list = (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
};

const getOne = (req, res) => {
    const userId = req.params.userId;
    User.findById(userId, (err, users) => {
        res.json(users);
    });
};

const create = (req, res) => {
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
};

const deleteOne = (req, res) => {
    const userId = req.params.userId;
    User.deleteOne({_id: userId}, (err) => {
        res.json({
            message: "user deleted"
        });
    });
};

const update = (req, res) => {
    const userId = req.params.userId;
    User.updateOne({_id: userId}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    },(err) => {
        res.json({
            message: "user Updated"
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
