import { useState, useEffect } from "react";

export function TodoList() {
  const [tasks, setTasks] = useState(() => {
    // load from localStorage if present
    try {
      const stored = localStorage.getItem("todoTasks");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");

  // keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, created: new Date().toISOString() },
    ]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "1rem auto", fontFamily: "system-ui" }}>
      <h2 style={{ marginBottom: "0.5rem" }}>To-Do List</h2>
      <form onSubmit={addTask} style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          aria-label="New task"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "8px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 14,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <div
          style={{
            padding: "1rem",
            background: "#f5f5f5",
            borderRadius: 6,
            textAlign: "center",
            color: "#666",
          }}
        >
          No tasks yet. Add something above.
        </div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, gap: 6 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 10px",
                marginBottom: 6,
                border: "1px solid #e0e0e0",
                borderRadius: 6,
                background: "#fff",
                fontSize: 14,
              }}
            >
              <span>{task.text}</span>
              <button
                aria-label={`Delete ${task.text}`}
                onClick={() => deleteTask(task.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#d32f2f",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
