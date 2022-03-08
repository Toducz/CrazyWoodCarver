const mongoose = require("mongoose");

const Group = mongoose.model(
    "Group",
    new mongoose.Schema({
        groupCode: String,
        owner: mongoose.Schema.Types.ObjectId,
        startDate: mongoose.Schema.Types.Date,
        endDate: mongoose.Schema.Types.Date,
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    })
);

module.exports = Group;