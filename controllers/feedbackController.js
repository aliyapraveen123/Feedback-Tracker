const Feedback = require("../models/feedback")

// CREATE FEEDBACK
exports.createFeedback = async (req, res) => {

    try {

        const feedback = await Feedback.create({
            user: req.user.id,
            title: req.body.title,
            message: req.body.message,
            category: req.body.category
        })

        res.status(201).json({
            success: true,
            feedback
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

// GET ALL FEEDBACKS
exports.getFeedbacks = async (req, res) => {

    try {

        const feedbacks = await Feedback.find().populate("user", "name email")

        res.status(200).json({
            success: true,
            feedbacks
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

// UPDATE FEEDBACK
exports.updateFeedback = async (req, res) => {

    try {

        const feedback = await Feedback.findById(req.params.id)

        if (!feedback) {
            return res.status(404).json({
                success: false,
                message: "Feedback not found"
            })
        }

        feedback.title = req.body.title || feedback.title
        feedback.message = req.body.message || feedback.message
        feedback.category = req.body.category || feedback.category
        feedback.status = req.body.status || feedback.status

        await feedback.save()

        res.status(200).json({
            success: true,
            feedback
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

// DELETE FEEDBACK
exports.deleteFeedback = async (req, res) => {

    try {

        const feedback = await Feedback.findById(req.params.id)

        if (!feedback) {
            return res.status(404).json({
                success: false,
                message: "Feedback not found"
            })
        }

        await feedback.deleteOne()

        res.status(200).json({
            success: true,
            message: "Feedback deleted"
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}