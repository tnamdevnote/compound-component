export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      style={{
        border: "none",
        backgroundColor: "salmon",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
