import React from "react";
import { useTheme } from "./components/ThemeContext/ThemeContext.jsx";

const App = () => {
  const { setTheme } = useTheme();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sanika-UI</h1>

      <button onClick={() => setTheme("")}>Classic Pink Mode</button>
      <button onClick={() => setTheme("darkPink")}>Dark Pink Mode</button>
      <button onClick={() => setTheme("devMode")}>Dev Mode</button>
    </div>
  );
};

export default App;
