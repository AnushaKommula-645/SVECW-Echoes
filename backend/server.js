// // import express from "express";
// // import mongoose from "mongoose";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import bodyParser from "body-parser";

// // dotenv.config();
// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // // MongoDB Connection
// // mongoose.connect("mongodb://127.0.0.1:27017/svecwechoes", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// // .then(() => console.log("MongoDB connected"))
// // .catch(err => console.log(err));

// // // Routes
// // import userRoutes from "./routes/userRoutes.js";
// // app.use("/users", userRoutes);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// //works down


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads")); // 🔹 Serve uploaded images

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/svecwechoes", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// // Routes
// import userRoutes from "./routes/userRoutes.js";
// import postRoutes from "./routes/postRoutes.js"; // 🔹 Import Post Routes

// app.use("/users", userRoutes);
// app.use("/posts", postRoutes);  // 🔹 Add Post Routes

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";

dotenv.config();
const app = express();

// Ensure uploads folder exists before serving static files
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadDir)); // 🔹 Serve uploaded images

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/svecwechoes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Routes
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js"; // 🔹 Import Post Routes

app.use("/users", userRoutes);
app.use("/posts", postRoutes);  // 🔹 Add Post Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));