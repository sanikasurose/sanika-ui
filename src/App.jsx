import React from "react";
import { useTheme } from "./context/ThemeContext.jsx";
import Button from "./components/Button/Button.jsx";
import Container from "./components/Container/Container.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <Navbar
        name="Sanika Surose"
        leftLinks={[
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
        ]}
        rightLinks={[
          { label: "Experience", href: "/experience" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      <Container>
        <h1>Sanika-UI</h1>

        <h2>Theme Switcher</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
          <Button onClick={() => setTheme("")}>Classic Mode</Button>
          <Button onClick={() => setTheme("darkPink")}>Dark Mode</Button>
          <Button onClick={() => setTheme("devMode")}>Dev Mode</Button>
        </div>

        <h2>Button Component</h2>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
        </div>

        <h3 style={{ marginTop: "30px" }}>Sizes</h3>
        <div style={{ display: "flex", gap: "16px" }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>

        <h3 style={{ marginTop: "30px" }}>Disabled</h3>
        <Button disabled>Disabled Button</Button>
      </Container>
    </>
  );
};

export default App;
