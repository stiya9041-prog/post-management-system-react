function About({ theme }) {
  return (
    <div
        style={{
            padding: "24px",
            borderRadius: "16px",

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
                ? "0 10px 25px rgba(0,0,0,0.35)"
                : "0 10px 25px rgba(0,0,0,0.08)",
        marginBottom: "30px",
        }}
    >

      <h2 style={{ marginBottom: "12px" }}>
        🎯 Purpose of This Application
      </h2>

      <p style={{ color: "#ccc", lineHeight: "1.6" }}>
        The Post Management System is designed to help users create, organize,
        and manage written content in a simple and efficient way. Instead of
        relying on complex tools, this application focuses on clarity, speed,
        and ease of use.
      </p>

      <p style={{ color: "#ccc", lineHeight: "1.6" }}>
        This project demonstrates how modern web applications can be built
        using React by breaking functionality into reusable components,
        managing application state, and providing a responsive user experience.
      </p>

      <p style={{ color: "#ccc", lineHeight: "1.6" }}>
        The system is especially useful for students, beginners, or small teams
        who need a lightweight solution to manage notes, ideas, or short posts
        without backend complexity.
      </p>
    </div>
  );
}

export default About;

