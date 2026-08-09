# 📝 Redux Toolkit Todo App

A modern Todo App built with **React**, **Redux Toolkit**, and **Tailwind CSS**.

This project demonstrates how to manage global state using Redux Toolkit while keeping UI-related state local to components.

---

## ✨ Features

- ➕ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- ✅ Mark todo as completed
- ↩️ Undo completed todos
- 🔍 Filter todos
  - All
  - Active
  - Completed
- 🧹 Clear completed todos
- 📌 New todos appear at the top
- 🎨 Responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

- React
- Redux Toolkit
- React Redux
- Tailwind CSS
- Vite

---

## 📂 Folder Structure

```text
src
│
├── app
│   └── store.js
│
├── features
│   └── todo
│       └── todoSlice.js
│
├── components
│   ├── TodoForm.jsx
│   ├── FilterButtons.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📚 Redux Concepts Covered

- configureStore()
- createSlice()
- createSlice.prepare()
- nanoid()
- Provider
- useSelector()
- useDispatch()
- Redux Actions
- Redux Reducers
- Global State Management

---

## 📖 State Structure

```javascript
{
    todos: [
        {
            id: "unique-id",
            text: "Learn Redux Toolkit",
            completed: false
        }
    ],
    filter: "all"
}
```

---

## 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project folder

```bash
cd redux-toolkit-todo-app
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 🎯 Learning Outcomes

This project helped me understand:

- Global state management using Redux Toolkit
- Creating and organizing Redux slices
- Dispatching actions from different components
- Reading state with useSelector()
- Managing CRUD operations with Redux
- Separating UI state from global application state
- Building reusable React components

---

## 📸 Preview

![Redux Toolkit Todo App](assets/screenshot.png)

---

## 👨‍💻 Author

**Ayush Dubey**