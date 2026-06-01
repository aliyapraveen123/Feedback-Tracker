const mongoose = require("mongoose")

const feedbackSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        title: {
            type: String,
            required: true
        },

        message: {
            type: String,
            required: true
        },

        category: {
            type: String,
            enum: ["Bug", "Feature", "General"],
            default: "General"
        },

        status: {
            type: String,
            enum: ["Pending", "Reviewed"],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Feedback", feedbackSchema)