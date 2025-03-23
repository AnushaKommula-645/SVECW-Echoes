import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    studentID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profession: { type: String, required: true, enum: ["student", "teacher"] }
});

export default mongoose.model("User", UserSchema);
