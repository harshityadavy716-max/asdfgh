import React from "react";
import { createRoot } from "react-dom/client";

// Minimal App — replace with your real App import when available
function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, Arial, sans-serif", padding: 24 }}>
      <h1>Study Organizer</h1>
      <p>App entry initialized. Replace src/entry.jsx with your real app bootstrap.</p>
    </div>
  );
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Document is missing <div id=\"root\"></div>");
}
createRoot(rootEl).render(<App />);