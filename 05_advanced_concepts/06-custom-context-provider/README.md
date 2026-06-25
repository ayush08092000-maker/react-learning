# 🚀 Custom Context Provider - Developer Dashboard

A React project created to understand the **advanced Context API structure** using Custom Context Providers.

This project demonstrates how to separate Context creation, state management, and Provider setup for a cleaner and scalable React application.

---

## ✨ Features

- 👤 User Management using Custom UserProvider
- 📁 Project Management using Custom ProjectProvider
- Share global data without props drilling
- Update state from deeply nested components
- Manage state and functions outside App.jsx
- Clean Provider setup in main.jsx

---

## 🛠️ Technologies Used

- React JS
- Context API
- React Hooks
  - useState
  - useContext
- Tailwind CSS

---

## 📂 Project Structure

```text
src
│
├── components
│   │
│   ├── Navbar.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   └── ProjectCard.jsx
│
├── context
│   │
│   ├── UserContext.jsx
│   ├── UserProvider.jsx
│   │
│   ├── ProjectContext.jsx
│   └── ProjectProvider.jsx
│
├── App.jsx
└── main.jsx
```

---

# 🧠 Context Provider Flow

```text
Context.jsx

createContext()

        ↓

Provider.jsx

useState()
functions()

        ↓

Context.Provider

value={{
 state,
 functions
}}

        ↓

main.jsx

<Provider>
   <App/>
</Provider>

        ↓

Components

useContext()
```

---

# 👤 User Context

UserContext manages user related data.

## State

```javascript
user = {
 name: "Ayush",
 role: "Frontend Developer"
}
```

---

## Functions

```javascript
changeUser()
```

Used to update user information.

---

## Used In

- Navbar.jsx
- Profile.jsx

---

## Flow

```text
Change User Button

        ↓

changeUser()

        ↓

UserProvider state update

        ↓

UserContext updated

        ↓

Navbar & Profile re-render
```

---

# 📁 Project Context

ProjectContext manages project information.

## State

```javascript
projects = 5
```

---

## Functions

```javascript
addProject()

removeProject()
```

---

## Used In

- Dashboard.jsx
- ProjectCard.jsx

---

## Add Project Flow

```text
Add Project Button

        ↓

addProject()

        ↓

projects + 1

        ↓

Dashboard updates
```

---

## Remove Project Flow

```text
Remove Project Button

        ↓

removeProject()

        ↓

projects - 1

        ↓

Dashboard updates
```

---

# 🔥 main.jsx Provider Setup

Providers are wrapped at the root level.

Example:

```jsx
<UserProvider>

  <ProjectProvider>

      <App/>

  </ProjectProvider>

</UserProvider>
```

This allows the entire application to access global data.

---

# 📚 Concepts Practiced

✔ createContext()  
✔ Custom Provider Components  
✔ Provider Wrapping in main.jsx  
✔ Passing state globally  
✔ Passing functions globally  
✔ Updating Context state  
✔ Consuming Context using useContext  
✔ Avoiding Props Drilling  

---

# 🎯 Purpose

The main purpose of this project is to learn a scalable way of using React Context API by separating:

```text
Context Creation

      +

State & Logic

      +

Provider Setup
```

This structure keeps App.jsx clean and makes the application easier to maintain.

---

# 📌 Previous Context Projects

1. Context API Basics

```text
Single Context
Multiple States
Provider inside App.jsx
```

2. Multiple Context Practice

```text
Multiple Context Files
Multiple Providers
```

3. Custom Context Provider

```text
Separate Provider Components
main.jsx Wrapping
Professional Structure
```

---

## 🚀 Future Improvements

- Add useReducer with Context API
- Add API data management
- Add authentication context
- Add localStorage support

---