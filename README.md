# KoxNotes - Next.js + Firebase + Tailwind Note-Taking App

KoxNotes is a modern and responsive note-taking application built with Next.js, Firebase Authentication, and Tailwind CSS.

## 🚀 Features

- 📝 Create, edit, and delete notes
- 🔍 Search and filter notes
- 🔐 User authentication with Firebase (email/password and Google login)
- 🌈 Responsive and clean UI using Tailwind CSS
- 💾 Data persistence through Firebase backend
- 🧠 Authentication state management
- ☁️ Firebase Hosting deployment

## 🛠️ Technologies Used

- **Next.js** - React framework for production
- **Firebase** - Backend services (Authentication, Hosting)
- **Tailwind CSS** - Utility-first CSS framework
- **React** - JavaScript library for building UIs

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Koxone/KoxNotes-Next-Tailwind.git
   cd KoxNotes-Next-Tailwind
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your Firebase configuration:**
   - Create a file at `src/firebase/config.js`
   - Paste your Firebase configuration and export the `auth` object:
     ```js
     import { initializeApp } from "firebase/app";
     import { getAuth } from "firebase/auth";

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
     };

     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🔐 Authentication

- **Email and password registration/login**
- **Google login using Firebase `signInWithPopup()`**

## 📁 Folder Structure

```
KoxNotes-Next-Tailwind/
├── src/
│   ├── app/              # Application routes (Next.js app directory)
│   ├── components/       # UI components (buttons, inputs, logos, etc.)
│   ├── firebase/         # Firebase configuration
│   └── styles/           # Global styles
├── public/               # Static assets
├── .firebaserc           # Firebase project configuration
├── firebase.json         # Firebase hosting settings
├── tailwind.config.js    # Tailwind CSS config
├── postcss.config.js     # PostCSS config
└── package.json          # Project metadata and dependencies
```

## 🌐 Deployment with Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in the project:**
   ```bash
   firebase init
   ```
   - Select `Hosting` and link your Firebase project
   - Set `out` as the public directory
   - Enable single-page app rewrite
   - Skip GitHub deployment if not needed

4. **Build the project:**
   ```bash
   npm run build
   ```

5. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

6. **Your app will be live at:**
   ```
   https://your-project-name.web.app
   ```

## ✨ Credits

Developed with ❤️ by [Koxone](https://github.com/Koxone)

## 📄 License

This project is licensed under the MIT License.