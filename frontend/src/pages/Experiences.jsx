import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import "./Experiences.css";  // ✅ Import CSS

function Experiences({ userId }) {
  return (
    <div className="page-container">
      <h2>Interview Experiences</h2>
      <PostForm category="experience" userId={userId} />
      <PostList category="experience" />
    </div>
  );
}

export default Experiences;
