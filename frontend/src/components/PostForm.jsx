import { useState } from "react";
import axios from "axios";  // 🔹 Uncommented axios
import "./PostForm.css";

function PostForm({ category, userId }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const uploadRes = await axios.post("http://localhost:5000/posts/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },  // 🔹 Ensure proper headers
        });
        imageUrl = uploadRes.data.imageUrl;
        console.log("Image uploaded successfully:", imageUrl);
      } catch (error) {
        console.error("Image upload failed:", error);
        alert("Image upload failed. Try again.");
        return;
      }
    }

    const postData = { userId, category, content, imageUrl };

    try {
      const response = await axios.post("http://localhost:5000/posts", postData);
      console.log("Post created:", response.data);
      alert("Post created successfully!");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error.message);
      alert("Failed to create post. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <br />
      <div>
        <textarea
          rows="5"
          cols="50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
          required
        />
      </div>
      <br />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
