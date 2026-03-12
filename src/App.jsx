import React from "react";

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sanika-UI</h1>
      <p>Component library in progress...</p>

      <button onClick={() => setTheme("")}>Classic Pink Mode</button>
      <button onClick={() => setTheme("darkPink")}>Dark Pink Mode</button>
      <button onClick={() => setTheme("devMode")}>Dev Mode</button>
    </div>
  );
};

export default App;
