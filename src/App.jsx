import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CreatePost from "./pages/CreatePost";
import PostList from "./pages/PostList";


function App() {
  const [theme, setTheme] = useState("dark");
  const [posts, setPosts] = useState(() => {
  const savedPosts = localStorage.getItem("posts");
  return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [editingPost, setEditingPost] = useState(null);

  function addPost(post) {
  console.log("Adding post:", post);
  setPosts([...posts, post]);
  }

  function deletePost(id) {
  setPosts(posts.filter((post) => post.id !== id));
  } 

  function onEdit(post) {
  setEditingPost(post);
  }


  function updatePost(updatedPost) {
  setPosts(
    posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    )
  );
  setEditingPost(null);
  }


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
  localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);


  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
        background:
          theme === "dark" ? "var(--bg-dark)" : "var(--bg-light)",
        color:
          theme === "dark" ? "var(--text-dark)" : "var(--text-light)",
        minHeight: "100vh",
        borderRadius: "16px",
      }}
    >
      <Header theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About theme={theme} />

      <div id="create-post-section">
        <CreatePost
          key={editingPost?.id || "new"}
          addPost={addPost}
          editingPost={editingPost}
          updatePost={updatePost}
          theme={theme}
        />
      </div>

      <PostList
        posts={posts}
        deletePost={deletePost}
        onEdit={onEdit}
        theme={theme}
/>


    </div>

  );
}

export default App;

