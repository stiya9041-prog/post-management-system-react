function Hero({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1f1f1f, #151515)"
          : "linear-gradient(135deg, #ffffff, #f3f4f6)",

        borderRadius: "18px",
        padding: "40px 35px",
        marginBottom: "40px",

        boxShadow: isDark
          ? "0 20px 50px rgba(0,0,0,0.6)"
          : "0 20px 50px rgba(0,0,0,0.12)",

        border: isDark
          ? "1px solid rgba(255,255,255,0.05)"
          : "1px solid rgba(0,0,0,0.08)",

        transition: "all 0.35s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = isDark
          ? "0 25px 70px rgba(76,175,80,0.35)"
          : "0 25px 70px rgba(0,0,0,0.18)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = isDark
          ? "0 20px 50px rgba(0,0,0,0.6)"
          : "0 20px 50px rgba(0,0,0,0.12)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <h1
        style={{
          fontSize: "38px",
          marginBottom: "12px",
          lineHeight: "1.2",
          color: isDark ? "#ffffff" : "#111827",
        }}
      >
        ✍️ Organize Your Thoughts,
        <br />
        Manage Your Content Effortlessly
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: isDark ? "#bbb" : "#4b5563",
          maxWidth: "700px",
          lineHeight: "1.6",
          marginBottom: "25px",
        }}
      >
        A lightweight post management system built with React to help students
        and creators capture ideas, manage notes, and stay organized — without
        unnecessary complexity.
      </p>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {[
          "⚡ Fast & Simple",
          "🧠 React-Based",
          "📂 Local Storage",
        ].map((label) => (
          <span
            key={label}
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "13px",

              background: isDark
                ? "var(--card-dark)"
                : "var(--card-light)",

              border: isDark
                ? "1px solid var(--border-dark)"
                : "1px solid var(--border-light)",

              boxShadow: isDark
                ? "0 10px 30px rgba(0,0,0,0.4)"
                : "0 10px 30px rgba(0,0,0,0.08)",

              color: isDark ? "#ccc" : "#374151",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      <button
        onClick={() =>
          document
            .getElementById("create-post-section")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{
          marginTop: "30px",
          background: "linear-gradient(135deg, #4caf50, #43a047)",
          border: "none",
          color: "white",
          padding: "12px 26px",
          borderRadius: "30px",
          fontSize: "15px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(76,175,80,0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 14px 40px rgba(76,175,80,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(76,175,80,0.4)";
        }}
      >
        🚀 Create your first post
      </button>
    </div>
  );
}

export default Hero;
