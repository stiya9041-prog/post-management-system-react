function Header({ theme, setTheme }) {
  return (
    <div
      style={{
        marginBottom: "30px",
        paddingBottom: "15px",
        borderBottom: "1px solid #333",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "34px", marginBottom: "6px" }}>
          📋 Post Management System
        </h1>
        <p style={{ color: "#aaa", fontSize: "15px" }}>
          Create, view, and manage posts using React
        </p>
      </div>

      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        style={{
          background: "transparent",
          border: "1px solid #666",
          borderRadius: "20px",
          padding: "6px 14px",
          cursor: "pointer",
          color: "inherit",
          fontSize: "14px",
        }}
      >
        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default Header;

