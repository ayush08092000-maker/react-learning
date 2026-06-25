# 🚀 React Router Project

A simple React project demonstrating client-side routing using React Router DOM.
This project includes multiple pages with navigation without refreshing the browser.

---

# 📌 Features

* React Router DOM Implementation
* Multiple Page Routing
* Navigation without Page Reload
* Reusable Navbar Component
* Single Page Application (SPA) behavior
* Clean Component Structure

---

# 📂 Folder Structure

```bash
src/
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🛠️ Technologies Used

* HTML
* CSS
* JavaScript
* React JS
* React Router DOM
* Vite

---

# 📚 Concepts Practiced

## React Router DOM

Implemented routing using:

* BrowserRouter
* Routes
* Route
* Link

---

## BrowserRouter

Used in `main.jsx` to enable routing functionality in the entire React application.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## Routes & Route

Used in `App.jsx` to render different components based on URL paths.

Example:

```jsx
<Routes>

  <Route path="/" element={<Home />} />

  <Route path="/about" element={<About />} />

</Routes>
```

---

## Link

Used for navigation between pages without refreshing the browser.

Example:

```jsx
<Link to="/about">About</Link>
```

---

# 🌐 Application Routes

| Path      | Component |
| --------- | --------- |
| /         | Home      |
| /about    | About     |
| /products | Products  |
| /contact  | Contact   |

---

# ⚙️ Installation & Setup

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Install React Router DOM:

```bash
npm install react-router-dom
```

Run the project:

```bash
npm run dev
```

---

# 🎯 Learning Outcome

Through this project, I learned:

* How routing works in React
* Creating multiple pages in React
* Setting up BrowserRouter
* Defining routes
* Navigating using Link
* Building Single Page Applications

---

# 👨‍💻 Author

**Ayush Dubey**

MCA Student | React Learner

---

# ⭐ Note

This project is part of my React Learning Journey where I practice concepts step by step by building small projects.
