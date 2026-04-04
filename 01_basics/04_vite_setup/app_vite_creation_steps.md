⚡ Vite kya hai?
    👉 Vite = Fast development tool (build tool)
    👉 A super-fast way(engine) to create and run a React app.


<!-- ----------------------------- Steps ------------------------------ -->

🚀 Step 1: Create a Vite project =>
    Open terminal and run:
        npm create vite@latest

⚙️ Step 2: Setup options =>
    You will see some questions:
        Project name → my-app (or anything)
        Framework → React
        Variant → JavaScript

📁 Step 3: Go into project folder =>
        cd my-app

📦 Step 4: Install dependencies =>
        npm install

▶️ Step 5: Run the project =>
        npm run dev

👉 Output: 
        Local: http://localhost:5173/
        👉 Open this in browser 🎉


📁 Project Structure (important)
        my-app/
        ├── index.html
        ├── src/
        │   ├── main.jsx
        │   ├── App.jsx
        └── package.json


<!-- ---------------------------------------------------------------------- -->

🔥 Step 6: Understand main files=>

    📄 main.jsx =>
        👉 Entry point (React start hota hai yaha se)

            import React from "react";
            import ReactDOM from "react-dom/client";
            import App from "./App.jsx";

            ReactDOM.createRoot(document.getElementById("root")).render(
                <App />
            );
        
    📄 App.jsx =>
        👉 Yaha UI likhte ho

            function App() {
                return <h1>Hello Ayush 🚀</h1>;
            }

            export default App;

🔄 Step 7: Edit & See changes =>
        👉 App.jsx me change karo
        👉 Browser auto reload ho jayega ⚡

🛑 Stop server =>
        Ctrl + C

🔨 Build for production =>
        npm run build
        👉 Ye optimized files banata hai


------------------------- 🧠 Basic Requirements --------------------------

1️⃣ Node.js (must) =>
    👉 Ye sabse important hai
    Check karo:
        node -v
        npm -v
    ✔ Agar version aa raha hai → ready
    ❌ nahi → Node install karo


🔥 Useful VS Code Extensions (optional but helpful) =>
    👉 ये जरूरी नहीं हैं, but helpful हैं:
        ES7+ React Snippets
        Prettier (code formatting)
        Auto Rename Tag
        Bracket Pair Colorizer


