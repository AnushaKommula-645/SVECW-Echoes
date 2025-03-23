import { useEffect, useState } from "react";
import axios from "axios";
import "./postForm.css";
function PostList({ category }) {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/posts/${category}`)
  //     .then(res => setPosts(res.data))
  //     .catch(err => console.error("Error fetching posts", err));
  // }, [category]);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${category}`)
      .then(res => {
        console.log("Posts received:", res.data);  // Debug log
        setPosts(res.data);
      })
      .catch(err => console.error("Error fetching posts", err));
  }, [category]);
  
  // Like a Post
  // const handleLike = async (postId) => {
  //   try {
  //     const res = await axios.put(`http://localhost:5000/posts/like/${postId}`);
  //     setPosts(posts.map(post => post._id === postId ? { ...post, likes: res.data.likes } : post));
  //   } catch (error) {
  //     console.error("Error liking post", error);
  //   }
  // };
  const handleLike = async (postId) => {
    try {
      const response = await axios.post(`http://localhost:5000/posts/${postId}/like`);
      if (response.data.success) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId ? { ...post, likes: response.data.likes } : post
          )
        );
      }
    } catch (error) {
      console.error("Error liking post", error);
    }
  };
  

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="post">
          {post.userId && (
  <p><strong>Posted by:</strong> {post.userId.name} ({post.userId.email})</p>
)}

          <p><strong> &nbsp;&nbsp;&nbsp;&nbsp;</strong> {post.content}</p>
          {post.imageUrl && (
  <img 
    src={`http://localhost:5000${post.imageUrl}`} 
    alt="Post" 
    width="200"
    height ="700"
    onError={(e) => { e.target.style.display = "none"; }} 
  />
)}

          <p><strong>Likes:</strong> {post.likes}</p>  {/* 🔹 Display Likes */}
          <button className="btn" onClick={() => handleLike(post._id)}>👍 Like {post.likes}</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
