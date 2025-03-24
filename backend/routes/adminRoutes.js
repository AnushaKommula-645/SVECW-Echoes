import express from "express";
import User from "../models/User.js";
import Post from "../models/Post.js";

const router = express.Router();


// 📌 Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "email"); // Fetch only emails
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

// 📌 Delete a user
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
});

// 📌 Get all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// 📌 Delete a post
router.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
});

export default router;
