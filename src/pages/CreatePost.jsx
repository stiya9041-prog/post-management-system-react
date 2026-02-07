import { useState } from "react";

function CreatePost({ addPost, editingPost, updatePost, theme  }) {
    const [title, setTitle] = useState(
        editingPost ? editingPost.title : ""
    );
    const [author, setAuthor] = useState(
        editingPost ? editingPost.author : ""
    );
    const [content, setContent] = useState(
        editingPost ? editingPost.content : ""
    );


  function handleSubmit(e) {
  e.preventDefault();

    if (!title || !author || !content) return;

        if (editingPost && typeof updatePost === "function") {
            updatePost({
                id: editingPost.id,
                title,
                author,
                content,
            });
        } else {
            addPost({
                id: Date.now(),
                title,
                author,
                content,
            });
        }

        setTitle("");
        setAuthor("");
        setContent("");
    }


  return (
      <form onSubmit={handleSubmit}>
        <h2>{editingPost ? "Edit Post" : "Add New Post"}</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
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

            transition: "border-color 0.2s ease",

        }}
        onFocus={(e) =>
            (e.currentTarget.style.border = "1px solid #4caf50")
        }
        onBlur={(e) =>
            (e.currentTarget.style.border = "1px solid #444")
        }
        />
        <br /><br />

        <input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
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

            transition: "border-color 0.2s ease",
        }}
        onFocus={(e) =>
            (e.currentTarget.style.border = "1px solid #4caf50")
        }
        onBlur={(e) =>
            (e.currentTarget.style.border = "1px solid #444")
        }
        />
        <br /><br />

        <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
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

            transition: "border-color 0.2s ease",
        }}
        onFocus={(e) =>
            (e.currentTarget.style.border = "1px solid #4caf50")
        }
        onBlur={(e) =>
            (e.currentTarget.style.border = "1px solid #444")
        }
        ></textarea>
        <br /><br />

        <button
          type="submit"
            style={{
            background: "#4caf50",
            color: "white",
            padding: "10px 18px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(76,175,80,0.4)";
            }}
            onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
            }}
        >
            {editingPost ? "✏️ Update Post" : "➕ Add Post"}
        </button>

      </form>
    
  );
}

export default CreatePost;
