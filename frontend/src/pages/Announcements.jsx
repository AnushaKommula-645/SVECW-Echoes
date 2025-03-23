import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import "./Announcements.css";  // ✅ Import CSS

function Announcements({ userId }) {
  return (
    <div classname="body">
      <div className="page-container">
        <h2>Announcements</h2>
        <PostForm category="announcement" userId={userId} />
        <PostList category="announcement" />
      </div>
    </div>
    
  );
}

export default Announcements;
