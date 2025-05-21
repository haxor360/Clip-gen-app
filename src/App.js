import React, { useState } from "react";
import "./App.css";

function App() {
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Clip generation started for: " + link);
  };

  return (
    <div className="app">
      <h1>Viral Clip Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Paste YouTube video link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit">Generate Clip</button>
      </form>
    </div>
  );
}

export default App;