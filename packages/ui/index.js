export function Button({ children, style, ...props }) {
  return (
    <button
      style={{
        padding: "0.75rem 1.25rem",
        borderRadius: "0.75rem",
        fontWeight: 600,
        color: "#ffffff",
        backgroundColor: "#2563eb",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
