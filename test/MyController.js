let list = "my text";
let getOne = () => {
    console.log("Hello world");
};

module.exports = {
    list,
    getOne
};

// if key and val share same name, we can declare export as above

// module.exports = {
//     list: list,
//     getOne: getOne
// };

// module exports always at bottom
