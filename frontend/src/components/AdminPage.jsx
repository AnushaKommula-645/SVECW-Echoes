import { useEffect, useState } from "react";
import './AdminPage.css';
const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/admin/users"); // ✅ Include full URL
    const data = await res.json();
    setUsers(data);
  };
  
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/admin/posts"); // ✅ Include full URL
    const data = await res.json();
    setPosts(data);
  };
  
  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/admin/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };
  
  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/admin/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  };
  

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.email}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {post.content} by {post.userId?.email}
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
