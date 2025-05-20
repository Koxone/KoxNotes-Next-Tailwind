# KoxNotes - React + Tailwind Note-Taking App

KoxNotes is a modern note-taking and organization application built with React, Vite, and Tailwind CSS.

## Features

- 📝 Create, edit, and delete notes
- 🔍 Search and filter notes
- 🔐 User authentication (login/register)
- 💾 Local storage persistence
- 🎨 Clean, responsive UI with Tailwind CSS
- ✨ Interactive UI with animations
- 🛡️ Protected routes for authenticated users

## 🚀 Technologies

- **⚛️ React** - JavaScript library for building user interfaces
- **⚡ Vite** - Ultra-fast build tool for modern development
- **🌊 Tailwind CSS** - Utility-first CSS framework for rapid design
- **LocalStorage** - Browser-based persistent storage

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Koxone/KoxNotes-React-Tailwind.git
   cd KoxNotes-React-Tailwind
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
KoxNotes-React-Tailwind/
├── src/
│   ├── assets/          # Images, icons, and other static resources
│   ├── components/      # Reusable components
│   │   ├── layout/      # Structure components (Header, Sidebar, etc.)
│   │   ├── notes/       # Note-specific components
│   │   └── ui/          # Generic UI components
│   ├── contexts/        # React contexts for state management
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── services/        # Services for data operations
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main component
│   ├── index.css        # Global styles and Tailwind directives
│   └── main.jsx         # Application entry point
├── public/              # Public files
├── index.html           # Main HTML file
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🧩 Main Components

### NoteList
Displays the list of notes with filtering and search options.

### NoteEditor
Interactive editor for creating and modifying formatted notes.

### TagManager
Manages tags for organizing notes.

### ThemeToggle
Allows switching between light and dark modes.

## 💡 Implemented Best Practices

- **Modular Components**: Each component has a single responsibility
- **Optimized Tailwind**: Consistent use of components and classes
- **State Management**: Efficient implementation with Context API
- **Responsive Design**: Adaptable layout for all devices
- **Accessibility**: Enhanced controls and navigation for accessibility

## 🛠️ Developed With

- **VS Code** - Code editor
- **Heroicons** - Beautiful and consistent SVG icons
- **ESLint** - Code linting for consistency
- **Prettier** - Code formatting

## 🔜 Upcoming Features

- Cloud synchronization
- Advanced Markdown support
- Real-time collaboration
- Export to different formats (PDF, HTML, etc.)
- Integrated reminders and calendar

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

## 📝 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

Developed with ❤️ by [Koxone](https://github.com/Koxone)
