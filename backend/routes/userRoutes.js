import express from "express";
import User from "../models/User.js";

const router = express.Router();

// 🔹 Register User
router.post("/register", async (req, res) => {
    const { studentID, email, password, profession } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const newUser = new User({ studentID, email, password, profession });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
});

// 🔹 Login User
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Received login request:", email, password);  // Debugging

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== password) {
            console.log("Invalid password");
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log("Login successful for:", user);
        res.status(200).json({ 
            message: "Login successful", 
            user: {
                _id: user._id,
                studentID: user.studentID,
                email: user.email,
                profession: user.profession
            }
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Error logging in", error });
    }
});


// 🔹 Get User Profile
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password"); // Exclude password
        if (!user) return res.status(404).json({ message: "User not found" });

        console.log("User data:", user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user details", error });
    }
});

export default router;
