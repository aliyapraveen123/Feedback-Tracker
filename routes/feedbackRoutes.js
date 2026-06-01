const express = require("express")

const router = express.Router()

const {
    createFeedback,
    getFeedbacks,
    updateFeedback,
    deleteFeedback
} = require("../controllers/feedbackController")

const { protect } = require("../middleware/authMiddleware")

router.post("/", protect, createFeedback)

router.get("/", protect, getFeedbacks)

router.put("/:id", protect, updateFeedback)

router.delete("/:id", protect, deleteFeedback)

module.exports = router