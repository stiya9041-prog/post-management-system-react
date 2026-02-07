import { useState } from "react";
function PostList({ posts, deletePost, onEdit, theme={theme}  }) {
    const [search, setSearch] = useState("");

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>All Posts</h2>

      <input
        type="text"
        placeholder="Search posts by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        borderRadius: "6px",
        background:
            theme === "dark"
                ? "var(--card-dark)"
                : "var(--card-light)",

        color:
            theme === "dark"
                ? "var(--text-dark)"
                : "var(--text-light)",

        border:
            theme === "dark"
            ? "1px solid var(--border-dark)"
            : "1px solid var(--border-light)",

        boxShadow:
            theme === "dark"
                ? "0 10px 30px rgba(0,0,0,0.4)"
                : "0 10px 30px rgba(0,0,0,0.08)",

        }}
      />  

      {posts.length === 0 && <p>No posts yet.</p>}

      {posts
        .filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((post) => (

        <div
            key={post.id}
            className="fade-in-post"
            style={{
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "14px",

                background:
                    theme === "dark"
                        ? "var(--card-dark)"
                        : "var(--card-light)",

                border:
                    theme === "dark"
                        ? "1px solid var(--border-dark)"
                        : "1px solid var(--border-light)",

                boxShadow:
                    theme === "dark"
                        ? "0 8px 22px rgba(0,0,0,0.35)"
                        : "0 8px 22px rgba(0,0,0,0.08)",

                transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                    theme === "dark"
                        ? "0 14px 35px rgba(0,0,0,0.5)"
                        : "0 14px 35px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                    theme === "dark"
                        ? "0 8px 22px rgba(0,0,0,0.35)"
                        : "0 8px 22px rgba(0,0,0,0.08)";
            }}
        >


          <h3>{post.title}</h3>
          <p><strong>Author:</strong> {post.author}</p>
          <p
            style={{
                marginTop: "10px",
                color: theme === "dark" ? "#ccc" : "#444",
                lineHeight: "1.6",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "pre-wrap",
                }}
            >
                {post.content}
            </p>

        <button
            onClick={() => deletePost(post.id)}
            style={{
                background: "#e63946",
                color: "white",
                padding: "8px 14px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px",
                transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
            }
        >
            🗑 Delete
        </button>
        

        <button
            onClick={() => onEdit(post)}
            style={{
                marginLeft: "10px",
                background: "#3f51b5",
                border: "none",
                color: "white",
                padding: "6px 14px",
                borderRadius: "8px",
                cursor: "pointer",
            }}
        >
            ✏️ Edit
    </button>


        </div>
      ))}
    </div>
  );
}

export default PostList;
