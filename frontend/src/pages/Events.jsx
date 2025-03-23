import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import "./Events.css";  // ✅ Import CSS

function Events({ userId }) {
  return (
    <div className="page-container">
      <h2>Events</h2>
      <PostForm category="event" userId={userId} />
      <PostList category="event" />
    </div>
  );
}

export default Events;
