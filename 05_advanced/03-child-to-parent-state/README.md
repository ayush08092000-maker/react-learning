# 🔄 Child To Parent State Update

A simple React project created to understand how a child component can update the state of its parent component by passing the state updater function as props.

This concept helps to understand data flow in React and why Context API is needed in large applications.

---

## 🚀 Features

- 🌗 Light/Dark Theme Toggle
- Manage state in parent component
- Pass state as props
- Pass setState function as props
- Update parent state from child component
- Understand React data flow

---

## 🛠️ Technologies Used

- React JS
- React Hooks
  - useState
- Props
- CSS

---

## 📂 Project Structure

```text
src
│
├── components
│   │
│   └── Navbar.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# 🧠 React Data Flow

Normally React data flows from:

```text
Parent Component

        ↓

Child Component
```

using props.

Example:

```jsx
<Navbar theme={theme} />
```

---

# 🔄 Updating Parent State From Child

Parent component sends:

```jsx
<Navbar 
 theme={theme}
 setTheme={setTheme}
/>
```

---

Child component receives:

```jsx
const Navbar = ({theme, setTheme}) => {

}
```

---

Child updates parent state:

```javascript
setTheme(
 theme === "Light"
 ? "Dark"
 : "Light"
)
```

---

# 🌗 Theme Change Flow

```text
App.jsx

useState()

theme = "Light"


        ↓


Pass theme + setTheme


        ↓


Navbar.jsx


        ↓


Button Click


        ↓


setTheme()


        ↓


Parent State Updates


        ↓


UI Re-render
```

---

# 📚 Concepts Practiced

✔ useState Hook  
✔ Props Passing  
✔ Passing Function as Props  
✔ Child to Parent Communication  
✔ State Update from Child Component  
✔ Conditional Rendering Style  

---

# 🎯 Purpose

The purpose of this project is to understand how child components can communicate with parent components.

This concept also explains the problem of passing props through multiple components, which is later solved using Context API.

---

# 🔥 Next Step

After understanding this concept:

```text
Child To Parent State

        ↓

Context API Basics

        ↓

Multiple Context

        ↓

Custom Context Provider
```

---

# 📌 Learning Summary

```text
Parent owns the state

        +

Child receives setState function

        +

Child calls function

        =

Parent state updates
```

---