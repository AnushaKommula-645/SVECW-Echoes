const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configure storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");  // Save images in 'uploads/' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

// Set up Multer
const upload = multer({ storage });

// Route to handle image uploads
router.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    res.json({ imageUrl });  // Send back the image URL
});

// Serve uploaded images as static files
router.use("/uploads", express.static("uploads"));

module.exports = router;
