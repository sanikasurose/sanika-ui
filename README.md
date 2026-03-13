# Sanika-UI

A lightweight React UI component library built to explore reusable component architecture, theme systems, and modern frontend development practices.

This project serves as both a **design system playground** and a **portfolio project**, demonstrating how reusable UI components can be structured, styled, and shared across applications.

---

## Project Overview

Sanika-UI is a collection of reusable React components designed to be modular, customizable, and themeable. The project focuses on building common UI elements from scratch rather than relying on external libraries.

The goal is to simulate the development of a small component library similar to those used in real-world applications, while experimenting with:

- reusable component architecture
- design systems and theme variables
- UI animations and transitions
- modern React patterns such as hooks and context

The repository also includes a **demo page** that showcases each component and its variants.

---

## Motivation

Many modern web applications rely on component libraries such as Material UI, Chakra UI, or Ant Design. While these libraries are powerful, understanding how they work internally is an important skill for frontend engineers.

This project was created to:

- gain deeper experience building **reusable UI components**
- understand how **theme systems** are implemented
- practice **clean component architecture in React**
- build a **custom design system** without external UI frameworks
- create a **portfolio-quality frontend project**

By building each component manually, the project highlights how design systems and UI frameworks are structured behind the scenes.

---

## Components

The library currently includes the following reusable components:

### Button

A customizable button component with multiple variants and sizes.

Features:

- Primary, secondary, danger, and outline variants
- Multiple size options
- Disabled state

---

### Navbar

A responsive navigation bar component that supports left and right link groups.

Features:

- Customizable brand/title
- Flexible link structure
- Simple layout for portfolio or app navigation

---

### Modal

A reusable modal dialog component.

Features:

- Controlled open/close state
- Overlay background
- Smooth appearance and dismissal

---

### Tabs

A tabbed interface component for switching between content sections.

Features:

- Dynamic tab definitions
- Clean content switching
- Simple API for passing tab content

---

### Toast

A temporary notification component used to display short messages.

Features:

- Success, error, and info variants
- Auto-dismiss behavior
- Smooth entry and exit animations

---

### ProjectCard

A card component designed for showcasing projects in a portfolio grid.

Features:

- Title and description
- Technology tags
- Optional preview image
- Hover animations and link indicator

---

### Container

A layout wrapper used to keep page content aligned and readable.

---

## Theme System

Sanika-UI includes a **custom theme system** implemented using **React Context and CSS variables**.

Themes are defined in `themes.css` and applied through the `data-theme` attribute on the root document element.

### Available Themes

- **Classic Pink** – light theme used as the default
- **Dark Pink** – darker version of the base palette
- **Dev Mode** – purple/blue AI-inspired color scheme

The theme can be changed in two ways:

1. **Theme buttons** in the UI
2. **Keyboard shortcut**

Press **T** to cycle between themes.

When a theme changes, all components automatically update because they rely on shared CSS variables such as:

- `--color-background`
- `--color-text`
- `--color-primary`
- `--color-card`
- `--color-border`

This architecture allows new themes to be added easily without modifying individual components.

---

## Running the Project

To run the development environment locally:

```bash
npm install
npm run dev
```

After starting the development server, open the local URL shown in the terminal to view the component demo page.

---

## Future Improvements

Planned enhancements include:

- additional UI components
- improved accessibility
- expanded theme customization
- packaging the library for reuse across projects

---

## Author

**Sanika Surose**

Software Engineering Student
React / Frontend Development / UI Systems
