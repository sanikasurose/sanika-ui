import React, { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext.jsx";

import Button from "./components/Button/Button.jsx";
import Container from "./components/Container/Container.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";
import Toast from "./components/Toast/Toast.jsx";
import ProjectCard from "./components/ProjectCard/ProjectCard.jsx";

const App = () => {
  const { setTheme, cycleTheme } = useTheme();

  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [closing, setClosing] = useState(false);

  const showToast = (message, type) => {
    if (toast) {
      setClosing(true);

      setTimeout(() => {
        setToast({ message, type });
        setClosing(false);
      }, 300);
    } else {
      setToast({ message, type });
    }
  };

  // Keyboard shortcut for theme switching
  useEffect(() => {
    const handleKeyPress = (event) => {
      const activeTag = document.activeElement.tagName;

      // Prevent triggering when typing
      if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

      if (event.key.toLowerCase() === "t") {
        cycleTheme();
        showToast("Theme switched", "info");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [cycleTheme]);

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

        {/* Theme Switcher */}

        <h2>Theme Switcher</h2>

        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <Button onClick={() => setTheme("")}>Classic Mode</Button>
          <Button onClick={() => setTheme("darkPink")}>Dark Mode</Button>
          <Button onClick={() => setTheme("devMode")}>Dev Mode</Button>
        </div>

        <p style={{ fontSize: "14px", opacity: 0.7 }}>
          Press <strong>T</strong> to cycle themes
        </p>

        {/* Button Demo */}

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

        {/* Modal Demo */}

        <h2 style={{ marginTop: "40px" }}>Modal Component</h2>

        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

        {/* Tabs Demo */}

        <h2 style={{ marginTop: "40px" }}>Tabs Component</h2>

        <Tabs
          tabs={[
            {
              label: "Overview",
              content: <p>This is the overview tab.</p>,
            },
            {
              label: "Features",
              content: <p>Reusable components, themes, and animations.</p>,
            },
            {
              label: "Usage",
              content: <p>Import the component and pass tab content.</p>,
            },
          ]}
        />

        {/* Toast Demo */}

        <h2 style={{ marginTop: "40px" }}>Toast Component</h2>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button onClick={() => showToast("Saved successfully!", "success")}>
            Success Toast
          </Button>

          <Button onClick={() => showToast("Something went wrong", "error")}>
            Error Toast
          </Button>

          <Button onClick={() => showToast("Here is some info", "info")}>
            Info Toast
          </Button>
        </div>

        {/* Project Card Demo */}

        <h2 style={{ marginTop: "40px" }}>Project Cards</h2>

        <div className="projects-grid">
          <ProjectCard
            title="SeamSecure"
            image="/images/seamsecure.png"
            tags={[
              "Python",
              "FastAPI",
              "Uvicorn",
              "Pydantic",
              "Google Gemini",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Vite",
            ]}
            description="SeamSecure is a full-stack web application that analyzes email threads for potential security risks using rule-based heuristics and Google Gemini AI."
            link="https://github.com"
          />

          <ProjectCard
            title="Clairity"
            image="/images/clairity.png"
            tags={[
              "Swift",
              "Google Vision API",
              "Google Gemini",
              "Google Healthcare NLP",
            ]}
            description="CLAIRITY is a privacy-focused Swift iOS app that uses OCR and AI to transform complex medical documents into clear, structured next steps."
            link="https://github.com"
          />

          <ProjectCard
            title="ScholarScrape"
            image="/images/scholarscrape.png"
            tags={["Python", "BeautifulSoup", "Schema Design", "JSON Output"]}
            description="ScholarScrape is a Python-based web scraper that crawls university faculty pages and converts academic data into structured research profiles."
            link="https://github.com"
          />
        </div>
      </Container>

      {/* Modal */}

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Example Modal"
      >
        <p>This is a reusable modal component from Sanika-UI.</p>

        <Button onClick={() => setModalOpen(false)}>Close</Button>
      </Modal>

      {/* Toast */}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          closing={closing}
          startClosing={() => {
            setClosing(true);
            setTimeout(() => {
              setToast(null);
              setClosing(false);
            }, 300);
          }}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default App;
