// import express from "express";
// import multer from "multer";
// import Post from "../models/Post.js";
// import path from "path";
// import fs from "fs";

// const router = express.Router();

// // 📌 Ensure uploads folder exists
// const uploadDir = path.join(process.cwd(), "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // 📌 Multer Storage Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//   },
// });

// const upload = multer({ storage });

// // 📌 Upload Image Route
// router.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }
//   res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
// });

// // 📌 Create a Post with Image URL
// router.post("/", async (req, res) => {
//   try {
//     console.log("Received post data:", req.body); // Debugging log

//     let { userId, category, content, imageUrl } = req.body;

//     // Validate required fields
//     if (!userId || !category || !content) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // Convert userId to ObjectId format (assuming MongoDB is used)
//     userId = userId.trim();
//     if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
//       return res.status(400).json({ error: "Invalid userId format" });
//     }

//     const post = new Post({ userId, category, content, imageUrl: imageUrl || "" });
//     await post.save();

//     res.status(201).json(post);
//   } catch (error) {
//     console.error("Error creating post:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // 📌 Serve Uploaded Files
// router.use("/uploads", express.static(uploadDir));

// // 📌 Get all posts by category
// router.get("/:category", async (req, res) => {
//   try {
//     const posts = await Post.find({ category: req.params.category }).populate("userId", "email");
//     res.status(200).json(posts);
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     res.status(500).json({ error: "Error fetching posts" });
//   }
// });

// // 📌 Like a post
// router.post("/:id/like", async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const post = await Post.findById(postId);

//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     // Ensure likes array exists
//     post.likes = post.likes || 0;
//     post.likes += 1; // Increment likes

//     await post.save();

//     res.json({ success: true, likes: post.likes });
//   } catch (error) {
//     console.error("Error updating likes:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// export default router;


import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import Post from "../models/Post.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// 📌 Ensure uploads folder exists before file upload
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 📌 Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// 📌 Upload Image Route
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

// 📌 Create a Post with Image URL
router.post("/", async (req, res) => {
  try {
    console.log("Received post data:", req.body);

    let { userId, category, content, imageUrl } = req.body;

    // Validate required fields
    if (!userId || !category || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate userId format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid userId format" });
    }

    const post = new Post({ userId, category, content, imageUrl: imageUrl || "" });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 📌 Get all posts by category
router.get("/:category", async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.category }).populate("userId", "email");
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// 📌 Like a post (toggle like/unlike)
router.post("/:id/like", async (req, res) => {
  try {
    const { userId } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const index = post.likes.indexOf(userId);
    if (index === -1) {
      post.likes.push(userId);
    } else {
      post.likes.splice(index, 1);
    }

    await post.save();
    res.json({ success: true, likes: post.likes.length });
  } catch (error) {
    console.error("Error updating likes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
